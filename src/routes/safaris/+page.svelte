<script lang="ts">
  import { MessageCircle, Mail, Calendar, Users, MapPin, Check } from "lucide-svelte";
  import { safariPackages } from "$lib/data/safaris";
</script>

<svelte:head>
  <title>Safari Packages | Asis Safaris — Kenya Safari Tours</title>
  <meta name="description" content="Browse Asis Safaris Kenya safari packages. Private 4x4 safaris to Masai Mara, Lake Nakuru, Amboseli and more. Expert local guides, full-board lodges, transparent pricing." />
</svelte:head>

<div class="page">
  <!-- Hero -->
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <span class="badge badge-sienna">Our Safaris</span>
      <h1>Kenya Safari Packages</h1>
      <p class="tagline">Private, guided wildlife journeys through Kenya's most iconic landscapes. Tailored to your travel style.</p>
    </div>
  </section>

  <!-- Packages -->
  <div class="container packages-section">
    <div class="section-header">
      <h2>Available Journeys</h2>
      <p>All packages include private vehicle, expert guide, full-board meals, and park fees.</p>
    </div>

    <div class="packages-grid">
      {#each safariPackages as pkg}
        <article class="package-card">
          <div class="card-image-wrap">
            <img src={pkg.heroImage} alt={pkg.name} class="card-image" />
            <div class="card-badges">
              <span class="badge badge-sienna">{pkg.category}</span>
              {#if pkg.featured}<span class="badge badge-sand">Featured</span>{/if}
            </div>
          </div>
          <div class="card-body">
            <h3>{pkg.name}</h3>
            <p class="card-tagline">{pkg.tagline}</p>

            <div class="card-meta">
              <span><Calendar size={14} />{pkg.duration} days</span>
              <span><Users size={14} />{pkg.groupSize.min}–{pkg.groupSize.max} travelers</span>
              <span><MapPin size={14} />{pkg.destinations.slice(1).join(", ")}</span>
            </div>

            <ul class="card-highlights">
              {#each pkg.highlights.slice(0, 3) as h}
                <li><Check size={12} />{h}</li>
              {/each}
            </ul>

            <div class="card-footer">
              <div class="card-price">
                <span class="price-from">From</span>
                <span class="price-value">${pkg.startingPrice.toLocaleString()}</span>
                <span class="price-hint">/ person</span>
              </div>
              <div class="card-actions">
                <a href="/" class="btn btn-outline">View Details</a>
                <a
                  href="/?method=email#booking-panel"
                  class="btn btn-ghost"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href="https://wa.me/254714223041?text=Hi%2C%20I'm%20interested%20in%20{encodeURIComponent(pkg.name)}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <!-- Custom Safari CTA -->
    <div class="custom-cta">
      <div class="custom-cta-content">
        <h3>Don't see what you're looking for?</h3>
        <p>We build fully custom itineraries around your dates, budget, and interests. Tell us what you have in mind.</p>
      </div>
      <div class="custom-cta-actions">
        <a
          href="/?method=email#booking-panel"
          class="btn btn-outline-light"
        >
          <Mail size={18} />
          Email Inquiry
        </a>
        <a
          href="https://wa.me/254714223041?text=Hi%2C%20I'd%20like%20a%20custom%20safari%20itinerary"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          <MessageCircle size={18} />
          Build a Custom Safari
        </a>
      </div>
    </div>
  </div>
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
    height: 380px;
    background: url("/IMG-20251013-WA0060.jpg") center/cover no-repeat;
    display: flex;
    align-items: flex-end;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%);
  }

  .hero-content {
    position: relative;
    padding-bottom: 48px;
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
    line-height: 1.6;
    font-weight: 300;
  }

  /* Packages */
  .packages-section { padding-top: 60px; }

  .section-header {
    margin-bottom: 40px;
  }

  .section-header h2 {
    font-family: var(--font-primary);
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 400;
    margin-bottom: 8px;
  }

  .section-header p {
    font-size: 15px;
    color: var(--ak-light-grey1);
  }

  .packages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 28px;
    margin-bottom: 48px;
  }

  .package-card {
    background: white;
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;
    overflow: hidden;
    transition: box-shadow var(--transition-base), transform var(--transition-base);
  }

  .package-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
  }

  .card-image-wrap {
    position: relative;
    height: 240px;
    overflow: hidden;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .package-card:hover .card-image { transform: scale(1.04); }

  .card-badges {
    position: absolute;
    top: 14px;
    left: 14px;
    display: flex;
    gap: 6px;
  }

  .card-body { padding: 24px; }

  .card-body h3 {
    font-family: var(--font-primary);
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 6px;
  }

  .card-tagline {
    font-size: 13px;
    color: var(--ak-light-grey1);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
  }

  .card-meta span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: var(--ak-light-grey1);
    font-weight: 500;
  }

  .card-meta :global(svg) { color: var(--color-burnt-sienna); }

  .card-highlights {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .card-highlights li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    color: var(--color-icon-dark);
  }

  .card-highlights :global(svg) {
    color: var(--color-forest);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--color-light-grey);
    padding-top: 16px;
    gap: 12px;
    flex-wrap: wrap;
  }

  .price-from { font-size: 11px; color: var(--ak-light-grey1); display: block; }

  .price-value {
    font-family: var(--font-primary);
    font-size: 28px;
    line-height: 1;
    display: block;
  }

  .price-hint { font-size: 11px; color: var(--ak-light-grey1); }

  .card-actions {
    display: flex;
    gap: 8px;
  }

  .card-actions .btn {
    padding: 10px 18px;
    font-size: 13px;
    text-decoration: none;
  }

  /* Custom CTA */
  .custom-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    background: var(--color-primary-dark);
    color: white;
    padding: 36px 40px;
    border-radius: 4px;
    flex-wrap: wrap;
  }

  .custom-cta h3 {
    font-family: var(--font-primary);
    font-size: 26px;
    font-weight: 400;
    color: white;
    margin-bottom: 6px;
  }

  .custom-cta p {
    font-size: 14px;
    color: rgba(255,255,255,0.65);
    max-width: 480px;
  }

  .custom-cta .btn {
    white-space: nowrap;
    text-decoration: none;
    flex-shrink: 0;
  }

  .custom-cta-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    flex-shrink: 0;
  }

  .btn-outline-light {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border: 1px solid rgba(255,255,255,0.5);
    color: white;
    background: transparent;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: background var(--transition-fast);
    white-space: nowrap;
  }

  .btn-outline-light:hover {
    background: rgba(255,255,255,0.1);
  }

  @media (max-width: 640px) {
    .packages-grid { grid-template-columns: 1fr; }
    .custom-cta { flex-direction: column; align-items: flex-start; }
    .card-footer { flex-direction: column; align-items: flex-start; }
    .card-actions { width: 100%; }
    .card-actions .btn { flex: 1; justify-content: center; }
  }
</style>
