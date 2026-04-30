<script lang="ts">
  import { Phone, Mail, MapPin } from 'lucide-svelte';

  const footerDestinations = [
    { label: 'Masai Mara', href: '/safaris' },
    { label: 'Amboseli', href: '/safaris' },
    { label: 'Lake Nakuru', href: '/safaris' },
    { label: 'Diani Beach', href: '/safaris' },
    { label: 'Serengeti', href: '/safaris' },
  ];

  const footerSafaris = [
    { label: 'Classic Safaris', href: '/safaris' },
    { label: 'Luxury Safaris', href: '/safaris' },
    { label: 'Family Adventures', href: '/safaris' },
    { label: 'Honeymoon', href: '/safaris' },
    { label: 'Custom', href: '/safaris' },
  ];

  const footerCompany = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about' },
    { label: 'Sustainability', href: '/about' },
    { label: 'Contact', href: '/about#contact' },
  ];

  const footerSupport = [
    { label: 'FAQs', href: '/about#contact' },
    { label: 'Travel Insurance', href: '/about' },
    { label: 'Visa Info', href: '/about' },
    { label: 'Packing Guide', href: '/about' },
  ];
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand Column -->
      <div class="footer-brand">
        <img src="/IMG-20250908-WA0010.jpg" alt="ASIS Safaris Logo" class="footer-logo-img" />
        <h3 class="footer-logo">ASIS Safaris</h3>
        <p class="footer-description">
          Your local friend in Kenya. Authentic safari experiences with transparent 
          pricing and personal service. Talk to us first, explore later.
        </p>

        <div class="footer-contact">
          <a href="tel:+254714223041">
            <Phone size={16} />
            +254 714223041
          </a>
          <a href="/?method=email#booking-panel">
            <Mail size={16} />
            bookings@mail.asissafaris.com
          </a>
          <span>
            <MapPin size={16} />
            Nairobi, Kenya
          </span>
        </div>
      </div>

      <!-- Links -->
      <div class="footer-links-col">
        <h4>Destinations</h4>
        <ul>
          {#each footerDestinations as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Safaris</h4>
        <ul>
          {#each footerSafaris as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Company</h4>
        <ul>
          {#each footerCompany as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Support</h4>
        <ul>
          {#each footerSupport as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <span>© 2026 ASIS Safaris. All rights reserved.</span>
      <div class="footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--color-primary-dark);
    color: var(--color-primary-light);
    margin-top: 80px;
    padding-top: 60px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 40px;
  }

  .footer-logo {
    font-family: var(--font-primary);
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .footer-logo-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    display: block;
    margin-bottom: 12px;
    border-radius: 8px;
    background: #fff2;
  }

  .footer-description {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.8;
    max-width: 280px;
    margin-bottom: 24px;
  }

  .footer-contact {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .footer-contact a,
  .footer-contact span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }

  .footer-contact a:hover {
    color: var(--color-warm-sand);
  }

  .footer-contact :global(svg) {
    color: var(--color-warm-sand);
  }

  .footer-links-col h4 {
    font-family: var(--font-secondary);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }

  .footer-links-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links-col li {
    margin-bottom: 10px;
  }

  .footer-links-col a {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .footer-links-col a:hover {
    color: white;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 40px;
    padding: 20px 0;
  }

  .footer-bottom-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-bottom span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
  }

  .footer-legal {
    display: flex;
    gap: 24px;
  }

  .footer-legal a {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
  }

  .footer-legal a:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 960px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .footer-brand {
      grid-column: span 2;
    }
  }

  @media (max-width: 640px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }

    .footer-brand {
      grid-column: span 1;
    }

    .footer-bottom-inner {
      flex-direction: column;
      gap: 12px;
      text-align: center;
    }
  }
</style>
