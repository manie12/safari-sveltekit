<script lang="ts">
  import { Phone, MessageCircle, Menu, X } from 'lucide-svelte';
  
  let mobileMenuOpen = false;
</script>

<header class="header">
  <div class="container header-inner">
    <!-- Logo -->
    <a href="/" class="logo">
      ASIS <span>Safaris</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="nav-desktop">
      <a href="/destinations">Destinations</a>
      <a href="/safaris">Safari Packages</a>
      <a href="/about">About Us</a>
    </nav>

    <!-- Desktop CTA -->
    <div class="header-actions">
      <a href="tel:+254700000000" class="btn btn-ghost">
        <Phone size={16} />
        +254 700 000 000
      </a>
      <a 
        href="https://wa.me/254700000000" 
        target="_blank" 
        rel="noopener noreferrer"
        class="btn btn-primary"
      >
        <MessageCircle size={18} />
        WhatsApp Us
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" on:click={() => mobileMenuOpen = !mobileMenuOpen}>
      {#if mobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="mobile-menu">
      <nav class="mobile-nav">
        <a href="/destinations" on:click={() => mobileMenuOpen = false}>Destinations</a>
        <a href="/safaris" on:click={() => mobileMenuOpen = false}>Safari Packages</a>
        <a href="/about" on:click={() => mobileMenuOpen = false}>About Us</a>
      </nav>
      <div class="mobile-actions">
        <a href="tel:+254700000000" class="btn btn-outline" style="width: 100%;">
          <Phone size={20} />
          Call Us
        </a>
        <a 
          href="https://wa.me/254700000000" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-primary"
          style="width: 100%;"
        >
          <MessageCircle size={20} />
          WhatsApp Us
        </a>
      </div>
    </div>
  {/if}
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 87px;
    background-color: var(--color-linen);
    border-bottom: 1px solid var(--color-light-grey);
    z-index: 100;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .logo {
    font-family: var(--font-primary);
    font-size: 28px;
    font-weight: 400;
    color: var(--color-primary-dark);
    letter-spacing: -0.02em;
    text-decoration: none;
  }

  .logo span {
    font-weight: 500;
  }

  .nav-desktop {
    display: flex;
    gap: 40px;
  }

  .nav-desktop a {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-primary-dark);
    letter-spacing: 0.5px;
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .nav-desktop a:hover {
    color: var(--color-burnt-sienna);
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .mobile-menu-btn {
    display: none;
    padding: 8px;
    color: var(--color-primary-dark);
  }

  .mobile-menu {
    display: none;
    position: absolute;
    top: 87px;
    left: 0;
    right: 0;
    background: var(--color-linen);
    border-bottom: 1px solid var(--color-light-grey);
    padding: 24px;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }

  .mobile-nav a {
    font-size: 18px;
    font-weight: 500;
    color: var(--color-primary-dark);
    padding: 12px 0;
    text-decoration: none;
  }

  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 960px) {
    .nav-desktop,
    .header-actions {
      display: none;
    }

    .mobile-menu-btn {
      display: block;
    }

    .mobile-menu {
      display: block;
    }
  }
</style>
