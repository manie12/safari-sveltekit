import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const resend = new Resend(env.RESEND_API_KEY);
  const { name, email, phone, message, contactMethod, date, adults, children, safari } =
      await request.json();

  if (!name?.trim() || (!email?.trim() && !phone?.trim())) {
    return json({ error: 'Name and at least one contact method are required.' }, { status: 400 });
  }

  try {
    // 1. Confirmation email to the customer (only if email provided)
    if (email?.trim()) {
      await resend.emails.send({
        from: 'Asis Safaris <bookings@mail.asissafaris.com>',
        to: [email],
        subject: 'We received your safari inquiry — Asis Safaris',
        html: `
          <div style="font-family:Georgia,serif;max-width:600px;margin:auto;color:#2c2c2c;">
            <img src="https://asissafaris.com/ak-forest.webp" alt="Asis Safaris" style="width:100%;border-radius:4px;margin-bottom:24px;" />
            <h2 style="color:#8B4513;">Hello ${name},</h2>
            <p>Thank you for reaching out to <strong>Asis Safaris</strong>. We've received your inquiry and will get back to you within <strong>30 minutes</strong>.</p>
            <hr style="border:none;border-top:1px solid #e0d9cc;margin:24px 0;" />
            <h3 style="color:#8B4513;">Your Inquiry Details</h3>
            <table style="width:100%;font-size:14px;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#888;">Safari</td><td>${safari || 'Kenya Classic Safari'}</td></tr>
              <tr><td style="padding:6px 0;color:#888;">Travel Date</td><td>${date || 'TBD'}</td></tr>
              <tr><td style="padding:6px 0;color:#888;">Travelers</td><td>${adults || 2} adults${children ? `, ${children} children` : ''}</td></tr>
              ${phone ? `<tr><td style="padding:6px 0;color:#888;">Your Phone</td><td>${phone}</td></tr>` : ''}
              ${message ? `<tr><td style="padding:6px 0;color:#888;vertical-align:top;">Message</td><td>${message}</td></tr>` : ''}
            </table>
            <hr style="border:none;border-top:1px solid #e0d9cc;margin:24px 0;" />
            <p>We'll reach out via <strong>${contactMethod === 'email' ? 'email' : contactMethod === 'call' ? 'phone call' : 'WhatsApp'}</strong>. If you need immediate assistance:</p>
            <p>
              📞 <a href="tel:+254714223041" style="color:#8B4513;">+254 714 223 041</a>&nbsp;&nbsp;
              💬 <a href="https://wa.me/254714223041" style="color:#8B4513;">WhatsApp</a>
            </p>
            <p style="margin-top:32px;">Warm regards,<br/><strong>Asis Safaris Team</strong></p>
          </div>
        `,
      });
    }

    // 2. Internal notification to the team
    await resend.emails.send({
      from: 'Bookings Bot <bookings@mail.asissafaris.com>',
      to: [env.TEAM_EMAIL],
      replyTo: email ? email : undefined,
      subject: `New Safari Inquiry — ${name}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:auto;color:#2c2c2c;">
          <h2 style="color:#8B4513;">New Inquiry Received</h2>
          <table style="width:100%;font-size:14px;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#888;width:130px;">Name</td><td><strong>${name}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#888;">Email</td><td>${email || '—'}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Phone</td><td>${phone || '—'}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Preferred contact</td><td>${contactMethod}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Safari</td><td>${safari || 'Kenya Classic Safari'}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Travel Date</td><td>${date || 'TBD'}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Adults</td><td>${adults || 2}</td></tr>
            <tr><td style="padding:6px 0;color:#888;">Children</td><td>${children || 0}</td></tr>
            ${message ? `<tr><td style="padding:6px 0;color:#888;vertical-align:top;">Message</td><td>${message}</td></tr>` : ''}
          </table>
          ${phone ? `<p><a href="https://wa.me/${phone.replace(/\D/g,'')}">Open WhatsApp</a></p>` : ''}
        </div>
      `,
    });

    return json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
};
