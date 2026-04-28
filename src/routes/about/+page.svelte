<script lang="ts">
  import { MessageCircle, Phone, Mail, MapPin, Shield, Award, Star, Users, Heart } from "lucide-svelte";
</script>

<svelte:head>
  <title>About Asis Safaris | Kenya Safari Experts Since 2018</title>
  <meta name="description" content="Asis Safaris is a Kenya-based safari company led by local guides with deep knowledge of the Masai Mara, Lake Nakuru, and beyond. Transparent pricing, personal service, licensed & insured." />
</svelte:head>

<div class="page">

  <!-- Hero -->
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <span class="badge badge-sienna">Our Story</span>
      <h1>About Asis Safaris</h1>
      <p class="tagline">A Kenya-born safari company built on local knowledge, honest service, and a genuine love for the wild.</p>
    </div>
  </section>

  <!-- Story Section -->
  <section class="story-section container">
    <div class="story-grid">
      <div class="story-text">
        <h2>Who We Are</h2>
        <p>Asis Safaris was founded in Nairobi in 2018 by a team of Kenyan guides who grew up exploring the same landscapes they now share with visitors from around the world. We are not a booking aggregator — we are the people who pick you up from the airport, drive you through the Mara, and sit with you around the campfire.</p>
        <p>Our name comes from the Maasai word <em>asis</em> — meaning the sun. It reflects how we see every safari: as a moment of light, clarity, and connection with nature that stays with you long after you leave.</p>
        <p>Since 2018, we've led over 100 safaris for guests from more than 25 countries. Every trip is handled personally — no call centers, no generic itineraries, no surprises in the pricing.</p>
      </div>
      <div class="story-image-wrap">
        <img src="/IMG-20251013-WA0087.jpg" alt="Asis Safaris guide in the Masai Mara" class="story-image" />
        <div class="story-stat-card">
          <span class="stat-number">100+</span>
          <span class="stat-label">Safaris led since 2018</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Us -->
  <section id="why-us" class="why-section">
    <div class="container">
      <div class="section-header">
        <h2>Why Travelers Choose Us</h2>
        <p>We're not the biggest safari company in Kenya. We're the one that answers your WhatsApp at 6am on the morning of your departure.</p>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <span class="why-icon">🧭</span>
          <h3>Born Here, Expert Here</h3>
          <p>Our guides were born and raised in Kenya. They know the land, the seasons, the animal behavior, and the local communities — knowledge no foreign operator can replicate.</p>
        </div>
        <div class="why-card">
          <span class="why-icon">💬</span>
          <h3>Direct, Personal Service</h3>
          <p>You deal directly with your safari host from first enquiry to return transfer. No middlemen, no generic responses, no one reading from a script.</p>
        </div>
        <div class="why-card">
          <span class="why-icon">🔒</span>
          <h3>Fully Transparent Pricing</h3>
          <p>Our quotes cover your vehicle, guide, parks fees, transfers, and all meals. What we quote is what you pay — no airport surprise fees.</p>
        </div>
        <div class="why-card">
          <span class="why-icon">🌿</span>
          <h3>Responsible Travel</h3>
          <p>We work with eco-certified camps, maintain low-impact group sizes, and contribute a portion of every booking to community conservation programs.</p>
        </div>
        <div class="why-card">
          <span class="why-icon">🦁</span>
          <h3>Private Vehicles Only</h3>
          <p>We never put strangers together in shared vans. Your safari vehicle is yours — giving your guide full flexibility to stop, track, and wait for the perfect moment.</p>
        </div>
        <div class="why-card">
          <span class="why-icon">📱</span>
          <h3>Always Reachable</h3>
          <p>Before, during, and after your trip — we're on WhatsApp. Flight delayed? Change of plan? We adapt and we're there.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Credentials -->
  <section class="credentials-section container">
    <div class="credentials-grid">
      <div class="credential-item">
        <Shield size={28} />
        <div>
          <h4>Licensed & Registered</h4>
          <p>Kenya Tourism Board · Registration No. KTB/2018/0421</p>
        </div>
      </div>
      <div class="credential-item">
        <Award size={28} />
        <div>
          <h4>Fully Insured</h4>
          <p>All vehicles, guides, and guests covered under comprehensive safari insurance</p>
        </div>
      </div>
      <div class="credential-item">
        <Heart size={28} />
        <div>
          <h4>AMREF Evacuation Cover</h4>
          <p>Every guest is covered by AMREF Flying Doctors emergency evacuation throughout Kenya</p>
        </div>
      </div>
      <div class="credential-item">
        <Star size={28} />
        <div>
          <h4>5-Star Rated</h4>
          <p>Consistently rated 5 stars across Google, SafariBookings, and TripAdvisor</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="team-section container">
    <h2>The Team</h2>
    <div class="team-grid">
      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="/IMG-20251013-WA0079.jpg" alt="Lead Guide — Asis Safaris" class="team-photo" />
        </div>
        <h4>Manie</h4>
        <span class="team-role">Founder & Lead Guide</span>
        <p>Over 8 years guiding in the Mara ecosystem. Speaks English, Swahili, and Maa. Passionate about conservation photography.</p>
      </div>
      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="/IMG-20251013-WA0078.jpg" alt="Safari Guide — Asis Safaris" class="team-photo" />
        </div>
        <h4>Field Team</h4>
        <span class="team-role">Safari Guides & Drivers</span>
        <p>All guides hold Kenya Wildlife Service certification with a minimum of 5 years active guiding experience across multiple ecosystems.</p>
      </div>
      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="/IMG-20251013-WA0037.jpg" alt="Safari vehicle — Asis Safaris" class="team-photo" />
        </div>
        <h4>Our Fleet</h4>
        <span class="team-role">Custom 4x4 Safari Vehicles</span>
        <p>Land Cruisers and modified safari 4x4s with pop-up roofs, charging ports, cooler boxes, and first-aid kits — serviced before every trip.</p>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="contact-section">
    <div class="container contact-grid">
      <div class="contact-text">
        <h2>Get In Touch</h2>
        <p>Have a question about a specific safari, want a custom itinerary, or just want to know if the wildebeest are crossing? We're happy to talk.</p>
        <p>Most enquiries receive a response within 30 minutes during business hours (EAT, GMT+3).</p>

        <div class="contact-methods">
          <a href="https://wa.me/254703121351" target="_blank" rel="noopener noreferrer" class="contact-method">
            <MessageCircle size={20} />
            <div>
              <span class="method-label">WhatsApp (Fastest)</span>
              <span class="method-value">+254 714 223 041</span>
            </div>
          </a>
          <a href="tel:+254714223041" class="contact-method">
            <Phone size={20} />
            <div>
              <span class="method-label">Phone</span>
              <span class="method-value">+254 714 223 041</span>
            </div>
          </a>
          <a href="mailto:hello@asissafaris.com" class="contact-method">
            <Mail size={20} />
            <div>
              <span class="method-label">Email</span>
              <span class="method-value">hello@asissafaris.com</span>
            </div>
          </a>
          <div class="contact-method">
            <MapPin size={20} />
            <div>
              <span class="method-label">Based In</span>
              <span class="method-value">Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-cta-card">
        <h3>Ready to Plan Your Safari?</h3>
        <p>Tell us your travel dates, group size, and any interests — we'll come back with a tailored itinerary and honest quote.</p>
        <a
          href="https://wa.me/254714223041?text=Hi%2C%20I'd%20like%20to%20plan%20a%20Kenya%20safari.%20My%20dates%20are%20"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary contact-btn"
        >
          <MessageCircle size={18} />
          Start Planning on WhatsApp
        </a>
        <a href="tel:+254714223041" class="btn btn-outline contact-btn">
          <Phone size={18} />
          Call Us Directly
        </a>
      </div>
    </div>
  </section>

</div>

<style>
  .page {
    background: var(--color-linen);
    min-height: 100vh;
    padding-bottom: 80px;
  }

  /* Hero */
  .hero {
    position: relative;
    height: 600px;
    background: url("/IMG-20251013-WA0107.jpg") center/cover no-repeat;
    display: flex;
    align-items: flex-end;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%);
  }

  .hero-content {
    position: relative;
    padding-bottom: 52px;
  }

  .hero-content h1 {
    font-size: clamp(36px, 5vw, 60px);
    color: white;
    margin: 12px 0;
  }

  .tagline {
    font-size: 17px;
    color: rgba(255,255,255,0.88);
    max-width: 520px;
    line-height: 1.65;
    font-weight: 300;
  }

  /* Story */
  .story-section { padding: 72px 0; }

  .story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }

  .story-text h2 {
    font-family: var(--font-primary);
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 400;
    margin-bottom: 24px;
  }

  .story-text p {
    font-size: 15px;
    line-height: 1.85;
    color: var(--color-icon-dark);
    margin-bottom: 20px;
  }

  .story-text em { font-style: italic; color: var(--color-burnt-sienna); }

  .story-image-wrap {
    position: relative;
  }

  .story-image {
    width: 100%;
    height: 480px;
    object-fit: cover;
    border-radius: 4px;
  }

  .story-stat-card {
    position: absolute;
    bottom: -20px;
    left: -20px;
    background: var(--color-burnt-sienna);
    color: white;
    padding: 20px 28px;
    border-radius: 4px;
    box-shadow: var(--shadow-lg);
  }

  .stat-number {
    display: block;
    font-family: var(--font-primary);
    font-size: 40px;
    line-height: 1;
  }

  .stat-label {
    display: block;
    font-size: 12px;
    opacity: 0.85;
    letter-spacing: 0.5px;
    margin-top: 4px;
  }

  /* Why Us */
  .why-section {
    background: var(--color-primary-dark);
    color: white;
    padding: 72px 0;
  }

  .section-header {
    max-width: 640px;
    margin-bottom: 48px;
  }

  .section-header h2 {
    font-family: var(--font-primary);
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 400;
    color: white;
    margin-bottom: 12px;
  }

  .section-header p {
    font-size: 15px;
    color: rgba(255,255,255,0.6);
    line-height: 1.7;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .why-card {
    border: 1px solid rgba(255,255,255,0.1);
    padding: 28px;
    border-radius: 4px;
    transition: border-color var(--transition-fast), background var(--transition-fast);
  }

  .why-card:hover {
    border-color: var(--color-warm-sand);
    background: rgba(255,255,255,0.04);
  }

  .why-icon { font-size: 28px; display: block; margin-bottom: 14px; }

  .why-card h3 {
    font-family: var(--font-primary);
    font-size: 20px;
    font-weight: 400;
    color: white;
    margin-bottom: 10px;
  }

  .why-card p {
    font-size: 14px;
    color: rgba(255,255,255,0.6);
    line-height: 1.75;
  }

  /* Credentials */
  .credentials-section { padding: 56px 0; }

  .credentials-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .credential-item {
    background: white;
    border: 1px solid var(--color-light-grey);
    padding: 24px;
    border-radius: 4px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .credential-item :global(svg) { color: var(--color-burnt-sienna); flex-shrink: 0; margin-top: 2px; }

  .credential-item h4 {
    font-family: var(--font-secondary);
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .credential-item p {
    font-size: 12px;
    color: var(--ak-light-grey1);
    line-height: 1.5;
  }

  /* Team */
  .team-section {
    padding: 56px 0;
  }

  .team-section h2 {
    font-family: var(--font-primary);
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 400;
    margin-bottom: 36px;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .team-card {
    background: white;
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;
    overflow: hidden;
  }

  .team-photo-wrap {
    height: 240px;
    overflow: hidden;
  }

  .team-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .team-card:hover .team-photo { transform: scale(1.04); }

  .team-card h4 {
    font-family: var(--font-primary);
    font-size: 22px;
    font-weight: 400;
    padding: 20px 20px 4px;
  }

  .team-role {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-burnt-sienna);
    padding: 0 20px 12px;
    font-weight: 600;
  }

  .team-card p {
    font-size: 13px;
    color: var(--ak-light-grey1);
    line-height: 1.7;
    padding: 0 20px 20px;
  }

  /* Contact */
  .contact-section {
    background: var(--color-ak-shade);
    padding: 72px 0;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }

  .contact-text h2 {
    font-family: var(--font-primary);
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 400;
    margin-bottom: 16px;
  }

  .contact-text p {
    font-size: 15px;
    line-height: 1.8;
    color: var(--color-icon-dark);
    margin-bottom: 16px;
  }

  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 28px;
  }

  .contact-method {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    color: inherit;
    padding: 14px 18px;
    background: white;
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  }

  .contact-method:hover {
    border-color: var(--color-burnt-sienna);
    box-shadow: var(--shadow-sm);
  }

  .contact-method :global(svg) { color: var(--color-burnt-sienna); flex-shrink: 0; }

  .method-label {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--ak-light-grey1);
    font-weight: 600;
  }

  .method-value {
    display: block;
    font-size: 15px;
    font-weight: 500;
    color: var(--color-primary-dark);
    margin-top: 2px;
  }

  .contact-cta-card {
    background: white;
    border: 1px solid var(--color-light-grey);
    padding: 36px;
    border-radius: 4px;
    box-shadow: var(--shadow-md);
  }

  .contact-cta-card h3 {
    font-family: var(--font-primary);
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  .contact-cta-card p {
    font-size: 14px;
    color: var(--ak-light-grey1);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .contact-btn {
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
    margin-bottom: 12px;
    padding: 14px;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .credentials-grid { grid-template-columns: 1fr 1fr; }
    .why-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 768px) {
    .story-grid,
    .contact-grid { grid-template-columns: 1fr; }

    .story-image { height: 300px; }
    .story-stat-card { left: 12px; bottom: -16px; }

    .team-grid { grid-template-columns: 1fr; }
    .credentials-grid { grid-template-columns: 1fr; }
    .why-grid { grid-template-columns: 1fr; }
  }
</style>
