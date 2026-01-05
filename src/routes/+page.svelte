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
  <title>{safariPackage.name} | Asis Safaris</title>
  <meta name="description" content={safariPackage.tagline} />
</svelte:head>

<div class="page">
  <!-- Hero Section -->
  <section class="hero">
    {#key currentImageIndex}
      <img
        src={allImages[currentImageIndex]}
        alt={safariPackage.name}
        class="hero-image"
      />
    {/key}

    <div class="hero-overlay"></div>

    <!-- Hero Content -->
    <div class="hero-content container">
      <span class="badge badge-sienna">{safariPackage.category}</span>

      <h1>{safariPackage.name}</h1>
      <p class="tagline">{safariPackage.tagline}</p>

      <div class="hero-meta">
        <div class="meta-item">
          <Calendar size={20} />
          <span>More than {safariPackage.duration} Days</span>
        </div>
        <div class="meta-item">
          <MapPin size={20} />
          <span>{safariPackage.destinations.join("  ")}</span>
        </div>
        <div class="meta-item">
          <Users size={20} />
          <span
            >{safariPackage.groupSize.min}-{safariPackage.groupSize.max} travelers</span
          >
        </div>
      </div>
    </div>

    <!-- Image Navigation -->
    <div class="hero-nav">
      <button class="nav-btn" on:click={prevImage}>
        <ChevronLeft size={20} />
      </button>
      <button class="nav-btn" on:click={nextImage}>
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
        ></button>
      {/each}
    </div>

    <!-- Action Buttons -->
    <div class="hero-actions">
      <button class="action-btn"><Heart size={20} /></button>
      <button class="action-btn"><Share2 size={20} /></button>
    </div>
  </section>

  <!-- Main Content -->
  <div class="main-content container">
    <div class="content-grid">
      <!-- Left Column - Itinerary -->
      <div class="itinerary-column">
        <!-- Quick Stats -->
        <div class="quick-stats">
          <div class="stat">
            <span class="stat-label">Starting from</span>
            <span class="stat-value"
              >${safariPackage.startingPrice.toLocaleString()}</span
            >
            <!-- <span class="stat-hint">per group</span> -->
          </div>
          <div class="stat">
            <span class="stat-label">Duration</span>
            <span class="stat-value">> {safariPackage.duration}</span>
            <span class="stat-hint">days</span>
          </div>
          <div class="stat">
            <span class="stat-label">Best Time</span>
            <span class="stat-value-sm">Jul - Oct</span>
            <span class="stat-hint">Migration</span>
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
            >
              Day by Day
            </button>
            <button
              class="tab"
              class:active={activeTab === "overview"}
              on:click={() => (activeTab = "overview")}
            >
              Overview
            </button>
            <button
              class="tab"
              class:active={activeTab === "included"}
              on:click={() => (activeTab = "included")}
            >
              What's Included
            </button>
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
                  >
                    {day.location}
                  </button>
                  {#if idx < safariPackage.itinerary.length - 1}
                    <span class="route-arrow">.</span>
                  {/if}
                {/each}
              </div>

              <!-- Day Cards -->
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
    <button class="scroll-top-btn" on:click={scrollToTop}>
      <ArrowUp size={20} />
    </button>
  {/if}

  <!-- Mobile Sticky CTA -->
  <div class="mobile-cta">
    <div class="mobile-price">
      <span class="mobile-price-label">From</span>
      <span class="mobile-price-value"
        >${safariPackage.startingPrice.toLocaleString()}</span
      >
      <span class="mobile-price-hint">per person</span>
    </div>
    <a
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary mobile-cta-btn"
    >
      <MessageCircle size={20} />
      Talk to Us
    </a>
  </div>
</div>

<style>
  .page {
    background: var(--color-linen);
    min-height: 100vh;
    padding-bottom: 100px;
  }

  /* Hero */
  .hero {
    position: relative;
    height: 75vh;
    max-height: 700px;
    min-height: 500px;
    overflow: hidden;
  }

  .hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: fadeIn 0.7s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  .breadcrumbs {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.8);
  }

  .breadcrumbs a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }

  .breadcrumbs a:hover {
    color: white;
  }

  .breadcrumbs .current {
    color: white;
  }

  .hero-content {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
  }

  .hero-content h1 {
    font-size: clamp(40px, 6vw, 64px);
    color: white;
    margin: 16px 0;
    line-height: 1.1;
  }

  .tagline {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    line-height: 1.6;
    font-weight: 300;
  }

  .hero-meta {
    display: flex;
    gap: 32px;
    margin-top: 24px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    font-weight: 500;
  }

  .meta-item :global(svg) {
    color: var(--color-warm-sand);
  }

  .hero-nav {
    position: absolute;
    bottom: 30px;
    right: 24px;
    display: flex;
    gap: 8px;
  }

  .nav-btn {
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background var(--transition-fast);
  }

  .nav-btn:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .hero-indicators {
    position: absolute;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  }

  .indicator {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.4);
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
    top: 20px;
    right: 24px;
    display: flex;
    gap: 8px;
  }

  .action-btn {
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  /* Main Content */
  .main-content {
    padding-top: 60px;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 40px;
  }

  /* Quick Stats */
  .quick-stats {
    display: flex;
    justify-content: space-between;
    background: white;
    border: 1px solid var(--color-light-grey);
    padding: 24px 32px;
    margin-bottom: 24px;
  }

  .stat {
    text-align: center;
  }

  .stat-label {
    font-size: 12px;
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
    font-size: 12px;
    color: var(--ak-light-grey1);
  }

  /* Tabs */
  .tabs-container {
    background: white;
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;
    overflow: hidden;
  }

  .tabs-header {
    display: flex;
    background: var(--color-linen);
    border-bottom: 1px solid var(--color-light-grey);
    padding: 0 20px;
  }

  .tab {
    padding: 20px 24px;
    font-size: 14px;
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

  .tabs-content {
    padding: 24px;
  }

  /* Route Preview */
  .route-preview {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    background: var(--color-linen);
    margin-bottom: 24px;
  }

  .route-badge {
    padding: 8px 16px;
    background: white;
    border: 1px solid var(--color-light-grey);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .route-badge.active {
    background: var(--color-burnt-sienna);
    color: white;
    border-color: var(--color-burnt-sienna);
  }

  .route-arrow {
    color: var(--ak-light-grey1);
    font-size: 12px;
  }

  .days-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Overview Tab */
  .overview-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .overview-section h3 {
    font-family: var(--font-primary);
    font-size: 28px;
    margin-bottom: 20px;
  }

  .description {
    white-space: pre-line;
    line-height: 1.9;
    color: var(--color-icon-dark);
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
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

  /* Included Tab */
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

  .excluded-list li {
    color: var(--ak-light-grey1);
  }

  /* Scroll to Top */
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

  .scroll-top-btn:hover {
    transform: translateY(-2px);
  }

  /* Mobile CTA */
  .mobile-cta {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background: white;
    border-top: 1px solid var(--color-light-grey);
    z-index: 100;
  }

  .mobile-price {
    flex: 1;
  }

  .mobile-price-label {
    font-size: 12px;
    color: var(--ak-light-grey1);
    display: block;
  }

  .mobile-price-value {
    font-family: var(--font-primary);
    font-size: 26px;
    line-height: 1;
  }

  .mobile-price-hint {
    font-size: 12px;
    color: var(--ak-light-grey1);
  }

  .mobile-cta-btn {
    padding: 14px 24px;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr;
    }

    .booking-column {
      display: none;
    }

    .mobile-cta {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .page {
      padding-bottom: 120px;
    }
  }

  @media (max-width: 768px) {
    .hero {
      height: 60vh;
    }

    .hero-meta {
      flex-direction: column;
      gap: 12px;
    }

    .quick-stats {
      flex-wrap: wrap;
      gap: 24px;
    }

    .stat {
      flex: 1;
      min-width: 120px;
    }

    .highlights-grid,
    .included-content {
      grid-template-columns: 1fr;
    }

    .scroll-top-btn {
      bottom: 100px;
    }
  }
</style>
