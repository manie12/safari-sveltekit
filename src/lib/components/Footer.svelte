<script lang="ts">
  import { Phone, Mail, MapPin } from 'lucide-svelte';

  const footerLinks = {
    destinations: ['Masai Mara', 'Amboseli', 'Lake Nakuru', 'Diani Beach', 'Serengeti'],
    safaris: ['Classic Safaris', 'Luxury Safaris', 'Family Adventures', 'Honeymoon', 'Custom'],
    company: ['About Us', 'Our Team', 'Sustainability', 'Careers', 'Contact'],
    support: ['FAQs', 'Travel Insurance', 'Visa Info', 'Packing Guide', 'Terms'],
  };
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand Column -->
      <div class="footer-brand">
        <h3 class="footer-logo">ASIS Safaris</h3>
        <p class="footer-description">
          Your local friend in Kenya. Authentic safari experiences with transparent 
          pricing and personal service. Talk to us first, explore later.
        </p>

        <div class="footer-contact">
          <a href="tel:+254700000000">
            <Phone size={16} />
            +254 700 000 000
          </a>
          <a href="mailto:hello@asissafaris.com">
            <Mail size={16} />
            hello@asissafaris.com
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
          {#each footerLinks.destinations as link}
            <li><a href="/destinations/{link.toLowerCase().replace(' ', '-')}">{link}</a></li>
          {/each}
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Safaris</h4>
        <ul>
          {#each footerLinks.safaris as link}
            <li><a href="/safaris">{link}</a></li>
          {/each}
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Company</h4>
        <ul>
          {#each footerLinks.company as link}
            <li><a href="/{link.toLowerCase().replace(' ', '-')}">{link}</a></li>
          {/each}
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Support</h4>
        <ul>
          {#each footerLinks.support as link}
            <li><a href="/support">{link}</a></li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <span>© 2024 ASIS Safaris. All rights reserved.</span>
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
