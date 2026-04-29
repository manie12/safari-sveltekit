<script lang="ts">
  import { onMount } from "svelte";
  import {
    Calendar,
    MapPin,
    Users,
    ChevronLeft,
    ChevronRight,
    Heart,
    Share2,
    ArrowUp,
    Check,
    X,
    MessageCircle,
    Star,
    Shield,
    Award,
    Clock,
    Phone,
    Mail,
  } from "lucide-svelte";
  import ItineraryDay from "$lib/components/ItineraryDay.svelte";
  import BookingPanel from "$lib/components/BookingPanel.svelte";
  import { safariPackages } from "$lib/data/safaris";

  const safariPackage = safariPackages[0];

  let expandedDay: number | null = 1;
  let selectedAddOns: string[] = [];
  let currentImageIndex = 0;
  let activeTab = "itinerary";
  let showScrollTop = false;

  const allImages = [safariPackage.heroImage, ...safariPackage.galleryImages];

  const reviews = [
    {
      name: "Sarah & Tom W.",
      country: "United Kingdom",
      rating: 5,
      text: "Asis Safaris exceeded every expectation. Our guide knew exactly where to find the big cats and was incredibly knowledgeable. The Mara at sunrise was something we'll never forget.",
      trip: "Kenya Classic Safari, October 2024",
    },
    {
      name: "James K.",
      country: "United States",
      rating: 5,
      text: "From the airport pickup to the farewell dinner, every detail was handled professionally. Saw lions, leopard, cheetah, and the wildebeest crossing — all in one week.",
      trip: "Kenya Classic Safari, August 2024",
    },
    {
      name: "Annelies V.",
      country: "Netherlands",
      rating: 5,
      text: "Booked through WhatsApp and everything was seamless. Small group, private vehicle, and a guide who felt like a friend by Day 2. Highly recommend for first-time safari travelers.",
      trip: "Kenya Classic Safari, January 2025",
    },
  ];

  const trustSignals = [
    { icon: Shield, label: "Licensed & Insured", sub: "Kenya Tourism Board" },
    { icon: Award, label: "100+ Safaris", sub: "Led since 2018" },
    { icon: Star, label: "5-Star Rated", sub: "Google & SafariBookings" },
    { icon: Clock, label: "30-Min Response", sub: "WhatsApp support" },
  ];

  function toggleAddOn(addOnId: string) {
    if (selectedAddOns.includes(addOnId)) {
      selectedAddOns = selectedAddOns.filter((id) => id !== addOnId);
    } else {
      selectedAddOns = [...selectedAddOns, addOnId];
    }
  }

  function toggleDay(day: number) {
    expandedDay = expandedDay === day ? null : day;
  }

  function prevImage() {
    currentImageIndex =
      currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
  }

  function nextImage() {
    currentImageIndex =
      currentImageIndex === allImages.length - 1 ? 0 : currentImageIndex + 1;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  onMount(() => {
    const handleScroll = () => {
      showScrollTop = window.scrollY > 400;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<svelte:head>
  <title>{safariPackage.name} | Asis Safaris — Kenya Safari Tours</title>
  <meta name="description" content="Book the Kenya Classic Safari with Asis Safaris — 7 days through Nairobi, Lake Nakuru, and the Masai Mara. Expert local guides, private 4x4 vehicles, full-board lodges. From $2,850 per person." />
  <meta name="keywords" content="Kenya safari, Masai Mara safari, Kenya classic safari tour, Lake Nakuru, Nairobi safari, Africa wildlife tour, Kenya safari packages, Asis Safaris" />
  <meta property="og:title" content="{safariPackage.name} | Asis Safaris" />
  <meta property="og:description" content="7-day Kenya safari through Nairobi, Lake Nakuru & Masai Mara. Private vehicle, expert guides, full board. From $2,850." />
  <meta property="og:image" content={safariPackage.heroImage} />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://asissafaris.com/safaris/kenya-classic-safari" />
</svelte:head>

<div class="page">
  <!-- Hero Section -->
  <section class="hero">
    {#key currentImageIndex}
      <img
        src={allImages[currentImageIndex]}
        alt="Kenya Classic Safari — {safariPackage.tagline}"
        class="hero-image"
      />
    {/key}

    <div class="hero-overlay"></div>

    <!-- Hero Content -->
    <div class="hero-content container">
      <div class="hero-badges">
        <span class="badge badge-sienna">{safariPackage.category}</span>
        <span class="badge badge-sand">Featured</span>
      </div>

      <h1>{safariPackage.name}</h1>
      <p class="tagline">{safariPackage.tagline}</p>

      <div class="hero-meta">
        <div class="meta-item">
          <Calendar size={18} />
          <span>{safariPackage.duration} Days</span>
        </div>
        <div class="meta-item">
          <MapPin size={18} />
          <span>{safariPackage.destinations.slice(1).join(" · ")}</span>
        </div>
        <div class="meta-item">
          <Users size={18} />
          <span>{safariPackage.groupSize.min}–{safariPackage.groupSize.max} travelers</span>
        </div>
        <div class="meta-item">
          <Star size={18} />
          <span>5.0 · 47 reviews</span>
        </div>
      </div>

      <div class="hero-ctas">
        <a
          href="https://wa.me/254714223041?text=Hi%2C%20I'm%20interested%20in%20the%20Kenya%20Classic%20Safari"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary hero-cta-btn"
        >
          <MessageCircle size={18} />
          Plan My Safari
        </a>
        <a href="/?method=email#booking-panel" class="btn btn-glass">
          <Mail size={18} />
          Email Inquiry
        </a>
        <a href="tel:+254714223041" class="btn btn-glass">
          <Phone size={18} />
          Call Us Now
        </a>
      </div>
    </div>

    <!-- Image Navigation -->
    <div class="hero-nav">
      <button class="nav-btn" on:click={prevImage} aria-label="Previous image">
        <ChevronLeft size={20} />
      </button>
      <button class="nav-btn" on:click={nextImage} aria-label="Next image">
        <ChevronRight size={20} />
      </button>
    </div>

    <!-- Image Indicators -->
    <div class="hero-indicators">
      {#each allImages as _, idx}
        <button
          class="indicator"
          class:active={idx === currentImageIndex}
          on:click={() => (currentImageIndex = idx)}
          aria-label="View image {idx + 1}"
        ></button>
      {/each}
    </div>

    <!-- Action Buttons -->
    <div class="hero-actions">
      <button class="action-btn" aria-label="Save to wishlist"><Heart size={18} /></button>
      <button class="action-btn" aria-label="Share this safari"><Share2 size={18} /></button>
    </div>
  </section>

  <!-- Trust Bar -->
  <div class="trust-bar">
    <div class="container trust-bar-inner">
      {#each trustSignals as signal}
        <div class="trust-item">
          <svelte:component this={signal.icon} size={20} />
          <div>
            <span class="trust-label">{signal.label}</span>
            <span class="trust-sub">{signal.sub}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Main Content -->
  <div class="main-content container">
    <div class="content-grid">
      <!-- Left Column -->
      <div class="itinerary-column">
        <!-- Quick Stats -->
        <div class="quick-stats">
          <div class="stat">
            <span class="stat-label">Starting from</span>
            <span class="stat-value">${safariPackage.startingPrice.toLocaleString()}</span>
            <span class="stat-hint">per person</span>
          </div>
          <div class="stat">
            <span class="stat-label">Duration</span>
            <span class="stat-value">{safariPackage.duration}</span>
            <span class="stat-hint">days</span>
          </div>
          <div class="stat">
            <span class="stat-label">Best Time</span>
            <span class="stat-value-sm">Jul – Oct</span>
            <span class="stat-hint">Great Migration</span>
          </div>
          <div class="stat">
            <span class="stat-label">Difficulty</span>
            <span class="badge badge-forest">{safariPackage.difficulty}</span>
          </div>
        </div>

        <!-- Tabs -->
        <div class="tabs-container">
          <div class="tabs-header">
            <button
              class="tab"
              class:active={activeTab === "itinerary"}
              on:click={() => (activeTab = "itinerary")}
            >Day by Day</button>
            <button
              class="tab"
              class:active={activeTab === "overview"}
              on:click={() => (activeTab = "overview")}
            >Overview</button>
            <button
              class="tab"
              class:active={activeTab === "included"}
              on:click={() => (activeTab = "included")}
            >What's Included</button>
          </div>

          <div class="tabs-content">
            {#if activeTab === "itinerary"}
              <!-- Route Preview -->
              <div class="route-preview">
                {#each safariPackage.itinerary as day, idx}
                  <button
                    class="route-badge"
                    class:active={expandedDay === day.day}
                    on:click={() => (expandedDay = day.day)}
                  >{day.location}</button>
                  {#if idx < safariPackage.itinerary.length - 1}
                    <span class="route-arrow">→</span>
                  {/if}
                {/each}
              </div>

              <div class="days-list">
                {#each safariPackage.itinerary as day}
                  <ItineraryDay
                    {day}
                    isExpanded={expandedDay === day.day}
                    onToggle={() => toggleDay(day.day)}
                  />
                {/each}
              </div>

            {:else if activeTab === "overview"}
              <div class="overview-content">
                <div class="overview-section">
                  <h3>About This Journey</h3>
                  <p class="description">{safariPackage.description}</p>
                </div>
                <div class="overview-section">
                  <h3>Journey Highlights</h3>
                  <div class="highlights-grid">
                    {#each safariPackage.highlights as highlight}
                      <div class="highlight-item">
                        <span class="highlight-icon"><Check size={14} /></span>
                        <span>{highlight}</span>
                      </div>
                    {/each}
                  </div>
                </div>
                <div class="overview-section">
                  <h3>Destinations</h3>
                  <div class="destinations-list">
                    {#each safariPackage.destinations.slice(1) as dest}
                      <span class="dest-tag"><MapPin size={12} />{dest}</span>
                    {/each}
                  </div>
                </div>
              </div>

            {:else}
              <div class="included-content">
                <div class="included-column">
                  <h3>What's Included</h3>
                  <ul class="included-list">
                    {#each safariPackage.included as item}
                      <li>
                        <span class="check-icon"><Check size={12} /></span>
                        {item}
                      </li>
                    {/each}
                  </ul>
                </div>
                <div class="included-column">
                  <h3>Not Included</h3>
                  <ul class="excluded-list">
                    {#each safariPackage.excluded as item}
                      <li>
                        <span class="x-icon"><X size={12} /></span>
                        {item}
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <!-- Reviews Section -->
        <div class="reviews-section">
          <div class="reviews-header">
            <h2>What Our Guests Say</h2>
            <div class="reviews-summary">
              <div class="reviews-score">5.0</div>
              <div>
                <div class="stars-row">
                  {#each Array(5) as _}
                    <Star size={16} fill="currentColor" />
                  {/each}
                </div>
                <span class="reviews-count">47 verified reviews</span>
              </div>
            </div>
          </div>
          <div class="reviews-grid">
            {#each reviews as review}
              <div class="review-card">
                <div class="review-stars">
                  {#each Array(review.rating) as _}
                    <Star size={14} fill="currentColor" />
                  {/each}
                </div>
                <p class="review-text">"{review.text}"</p>
                <div class="review-author">
                  <span class="review-name">{review.name}</span>
                  <span class="review-meta">{review.country} · {review.trip}</span>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Why Asis Safaris -->
        <div class="why-section">
          <h2>Why Book With Asis Safaris</h2>
          <div class="why-grid">
            <div class="why-item">
              <span class="why-icon">🧭</span>
              <h4>Local Expertise</h4>
              <p>Born and raised in Kenya. Our guides have spent years tracking wildlife across every ecosystem we visit.</p>
            </div>
            <div class="why-item">
              <span class="why-icon">💬</span>
              <h4>Personal Service</h4>
              <p>You speak directly with your safari host on WhatsApp — no call centers, no generic itineraries.</p>
            </div>
            <div class="why-item">
              <span class="why-icon">🔒</span>
              <h4>Transparent Pricing</h4>
              <p>No hidden fees. The price you see covers your vehicle, guide, parks, and full-board meals.</p>
            </div>
            <div class="why-item">
              <span class="why-icon">🌿</span>
              <h4>Responsible Tourism</h4>
              <p>We work with eco-certified camps and contribute a portion of every booking to local conservation.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Booking Panel -->
      <div class="booking-column">
        <BookingPanel
          {safariPackage}
          {selectedAddOns}
          onAddOnToggle={toggleAddOn}
        />
      </div>
    </div>
  </div>

  <!-- Scroll to Top -->
  {#if showScrollTop}
    <button class="scroll-top-btn" on:click={scrollToTop} aria-label="Back to top">
      <ArrowUp size={20} />
    </button>
  {/if}

  <!-- Mobile Sticky CTA -->
  <div class="mobile-cta">
    <div class="mobile-price">
      <span class="mobile-price-label">From</span>
      <span class="mobile-price-value">${safariPackage.startingPrice.toLocaleString()}</span>
      <span class="mobile-price-hint">/ person</span>
    </div>
    <a
      href="https://wa.me/254714223041?text=Hi%2C%20I'm%20interested%20in%20the%20Kenya%20Classic%20Safari"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary mobile-cta-btn"
    >
      <MessageCircle size={18} />
      Plan My Safari
    </a>
    <a
      href="/?method=email#booking-panel"
      class="btn btn-outline mobile-cta-btn"
    >
      <Mail size={18} />
      Email Us
    </a>
  </div>
</div>

<style>
  .page {
    background: var(--color-linen);
    min-height: 100vh;
    padding-bottom: 100px;
  }

  /* ── Hero ─────────────────────────────────── */
  .hero {
    position: relative;
    height: 80vh;
    max-height: 760px;
    min-height: 560px;
    overflow: hidden;
  }

  .hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: fadeIn 0.8s ease;
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      160deg,
      rgba(0,0,0,0.1) 0%,
      rgba(0,0,0,0.35) 50%,
      rgba(0,0,0,0.72) 100%
    );
  }

  .hero-content {
    position: absolute;
    bottom: 64px;
    left: 0;
    right: 0;
  }

  .hero-badges {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .hero-content h1 {
    font-size: clamp(36px, 5.5vw, 68px);
    color: white;
    margin-bottom: 12px;
    line-height: 1.05;
    text-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }

  .tagline {
    font-size: clamp(15px, 1.8vw, 20px);
    color: rgba(255,255,255,0.9);
    max-width: 580px;
    line-height: 1.65;
    font-weight: 300;
    margin-bottom: 24px;
  }

  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 28px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255,255,255,0.92);
    font-size: 14px;
    font-weight: 500;
  }

  .meta-item :global(svg) { color: var(--color-warm-sand); }

  .hero-ctas {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .hero-cta-btn {
    padding: 14px 32px;
    font-size: 15px;
    text-decoration: none;
  }

  .btn-glass {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    font-size: 14px;
    font-weight: 500;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.35);
    color: white;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    transition: all var(--transition-base);
  }

  .btn-glass:hover {
    background: rgba(255,255,255,0.25);
    color: white;
  }

  .hero-nav {
    position: absolute;
    bottom: 40px;
    right: 24px;
    display: flex;
    gap: 8px;
  }

  .nav-btn {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background var(--transition-fast);
    border-radius: 2px;
  }

  .nav-btn:hover { background: rgba(255,255,255,0.3); }

  .hero-indicators {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  }

  .indicator {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: rgba(255,255,255,0.4);
    border: none;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .indicator.active {
    width: 32px;
    background: white;
  }

  .hero-actions {
    position: absolute;
    top: 24px;
    right: 24px;
    display: flex;
    gap: 8px;
  }

  .action-btn {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 2px;
    transition: background var(--transition-fast);
  }

  .action-btn:hover { background: rgba(255,255,255,0.3); }

  /* ── Trust Bar ────────────────────────────── */
  .trust-bar {
    background: var(--color-primary-dark);
    color: white;
    padding: 16px 0;
  }

  .trust-bar-inner {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .trust-item :global(svg) { color: var(--color-warm-sand); flex-shrink: 0; }

  .trust-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }

  .trust-sub {
    display: block;
    font-size: 11px;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.5px;
  }

  /* ── Main Content ─────────────────────────── */
  .main-content { padding-top: 56px; }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 40px;
  }

  /* ── Quick Stats ─────────────────────────── */
  .quick-stats {
    display: flex;
    justify-content: space-between;
    background: white;
    border: 1px solid var(--color-light-grey);
    padding: 24px 32px;
    margin-bottom: 24px;
  }

  .stat { text-align: center; }

  .stat-label {
    font-size: 11px;
    color: var(--ak-light-grey1);
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 4px;
  }

  .stat-value {
    font-family: var(--font-primary);
    font-size: 32px;
    display: block;
  }

  .stat-value-sm {
    font-family: var(--font-primary);
    font-size: 20px;
    display: block;
  }

  .stat-hint {
    font-size: 11px;
    color: var(--ak-light-grey1);
  }

  /* ── Tabs ────────────────────────────────── */
  .tabs-container {
    background: white;
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .tabs-header {
    display: flex;
    background: var(--color-linen);
    border-bottom: 1px solid var(--color-light-grey);
    padding: 0 20px;
  }

  .tab {
    padding: 18px 24px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: var(--ak-light-grey1);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .tab.active {
    color: var(--color-primary-dark);
    border-bottom-color: var(--color-burnt-sienna);
  }

  .tabs-content { padding: 24px; }

  /* ── Route ───────────────────────────────── */
  .route-preview {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    padding: 16px;
    background: var(--color-linen);
    margin-bottom: 24px;
    border-radius: 4px;
  }

  .route-badge {
    padding: 7px 16px;
    background: white;
    border: 1px solid var(--color-light-grey);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
    border-radius: 2px;
  }

  .route-badge.active {
    background: var(--color-burnt-sienna);
    color: white;
    border-color: var(--color-burnt-sienna);
  }

  .route-arrow {
    color: var(--color-warm-sand);
    font-size: 16px;
  }

  .days-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* ── Overview ────────────────────────────── */
  .overview-content {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .overview-section h3 {
    font-family: var(--font-primary);
    font-size: 28px;
    margin-bottom: 16px;
  }

  .description {
    white-space: pre-line;
    line-height: 1.9;
    color: var(--color-icon-dark);
    font-size: 15px;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .highlight-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
  }

  .highlight-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--color-warm-sand);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .destinations-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .dest-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border: 1px solid var(--color-light-grey);
    font-size: 13px;
    border-radius: 2px;
    background: white;
  }

  .dest-tag :global(svg) { color: var(--color-burnt-sienna); }

  /* ── Included ────────────────────────────── */
  .included-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .included-column h3 {
    font-family: var(--font-primary);
    font-size: 24px;
    margin-bottom: 20px;
  }

  .included-list,
  .excluded-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .included-list li,
  .excluded-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
    line-height: 1.5;
  }

  .check-icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--color-forest);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .x-icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--color-light-grey);
    color: var(--ak-light-grey1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .excluded-list li { color: var(--ak-light-grey1); }

  /* ── Reviews ─────────────────────────────── */
  .reviews-section {
    margin-bottom: 48px;
  }

  .reviews-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .reviews-header h2 {
    font-family: var(--font-primary);
    font-size: clamp(28px, 3vw, 40px);
    font-weight: 400;
  }

  .reviews-summary {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .reviews-score {
    font-family: var(--font-primary);
    font-size: 48px;
    line-height: 1;
  }

  .stars-row {
    display: flex;
    gap: 2px;
    color: var(--color-amber);
    margin-bottom: 4px;
  }

  .reviews-count {
    font-size: 12px;
    color: var(--ak-light-grey1);
  }

  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .review-card {
    background: white;
    border: 1px solid var(--color-light-grey);
    padding: 24px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .review-stars {
    display: flex;
    gap: 3px;
    color: var(--color-amber);
  }

  .review-text {
    font-size: 14px;
    line-height: 1.75;
    color: var(--color-icon-dark);
    flex: 1;
    font-style: italic;
  }

  .review-author { border-top: 1px solid var(--color-light-grey); padding-top: 14px; }

  .review-name {
    display: block;
    font-size: 13px;
    font-weight: 600;
  }

  .review-meta {
    display: block;
    font-size: 11px;
    color: var(--ak-light-grey1);
    margin-top: 2px;
    letter-spacing: 0.3px;
  }

  /* ── Why Section ─────────────────────────── */
  .why-section {
    margin-bottom: 48px;
  }

  .why-section h2 {
    font-family: var(--font-primary);
    font-size: clamp(28px, 3vw, 40px);
    font-weight: 400;
    margin-bottom: 28px;
  }

  .why-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .why-item {
    background: white;
    border: 1px solid var(--color-light-grey);
    padding: 24px;
    border-radius: 4px;
  }

  .why-icon {
    font-size: 28px;
    display: block;
    margin-bottom: 12px;
  }

  .why-item h4 {
    font-family: var(--font-primary);
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  .why-item p {
    font-size: 14px;
    line-height: 1.7;
    color: var(--ak-light-grey1);
  }

  /* ── Scroll to Top ───────────────────────── */
  .scroll-top-btn {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    background: var(--color-burnt-sienna);
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 100;
    box-shadow: var(--shadow-lg);
    transition: transform var(--transition-fast);
  }

  .scroll-top-btn:hover { transform: translateY(-2px); }

  /* ── Mobile Sticky CTA ───────────────────── */
  .mobile-cta {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    background: white;
    border-top: 1px solid var(--color-light-grey);
    z-index: 100;
    box-shadow: 0 -4px 16px rgba(0,0,0,0.08);
  }

  .mobile-price { flex: 1; }

  .mobile-price-label {
    font-size: 11px;
    color: var(--ak-light-grey1);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
  }

  .mobile-price-value {
    font-family: var(--font-primary);
    font-size: 28px;
    line-height: 1;
  }

  .mobile-price-hint { font-size: 11px; color: var(--ak-light-grey1); }

  .mobile-cta-btn {
    padding: 14px 24px;
    text-decoration: none;
    font-size: 14px;
  }

  /* ── Responsive ──────────────────────────── */
  @media (max-width: 1024px) {
    .content-grid { grid-template-columns: 1fr; }
    .booking-column { display: none; }
    .mobile-cta { display: flex; align-items: center; gap: 16px; }
    .page { padding-bottom: 120px; }
    .reviews-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 768px) {
    .hero { height: 65vh; min-height: 500px; }
    .hero-content { bottom: 80px; }
    .hero-meta { gap: 12px; }
    .hero-nav { display: none; }

    .quick-stats { flex-wrap: wrap; gap: 20px; padding: 20px; }
    .stat { flex: 1; min-width: 100px; }

    .highlights-grid,
    .included-content,
    .why-grid,
    .reviews-grid { grid-template-columns: 1fr; }

    .trust-bar-inner { gap: 12px; justify-content: flex-start; padding: 0 16px; }

    .scroll-top-btn { bottom: 90px; }
  }

  @media (max-width: 480px) {
    .hero-ctas { flex-direction: column; }
    .hero-cta-btn, .btn-glass { width: 100%; justify-content: center; }
  }
</style>
