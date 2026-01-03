<script lang="ts">
  import { slide } from 'svelte/transition';
  import { 
    Calendar, Phone, MessageCircle, Mail, ChevronDown, Check, 
    Clock, Shield, Plus, Minus, Info 
  } from 'lucide-svelte';
  import type { SafariPackage, PriceBreakdown } from '$lib/types';

  export let safariPackage: SafariPackage;
  export let selectedAddOns: string[] = [];
  export let onAddOnToggle: (addOnId: string) => void = () => {};

  let selectedDate = '';
  let adults = 2;
  let children = 0;
  let showAddOns = false;
  let showContactForm = false;
  let contactMethod: 'call' | 'whatsapp' | 'email' = 'whatsapp';

  let name = '';
  let phone = '';
  let email = '';
  let message = '';
  let isSubmitting = false;
  let isSubmitted = false;

  $: totalTravelers = adults + children;
  
  $: priceBreakdown = {
    basePrice: safariPackage.pricePerPerson * totalTravelers,
    childDiscount: children * safariPackage.pricePerPerson * 0.25,
    addOnsTotal: selectedAddOns.reduce((sum, addOnId) => {
      const addOn = safariPackage.optionalAddOns.find(a => a.id === addOnId);
      return sum + (addOn?.price || 0) * totalTravelers;
    }, 0),
    get subtotal() { return this.basePrice - this.childDiscount + this.addOnsTotal; },
    get serviceFee() { return Math.round(this.subtotal * 0.05); },
    get total() { return this.subtotal + this.serviceFee; },
    get perPerson() { return Math.round(this.total / totalTravelers); },
    currency: safariPackage.currency,
  } as PriceBreakdown;

  $: isFormValid = name.trim() && (phone.trim() || email.trim());

  async function handleSubmit() {
    isSubmitting = true;
    await new Promise(resolve => setTimeout(resolve, 1500));
    isSubmitting = false;
    isSubmitted = true;
  }

  function resetForm() {
    isSubmitted = false;
    name = '';
    phone = '';
    email = '';
    message = '';
  }
</script>

<aside class="booking-panel">
  {#if isSubmitted}
    <!-- Success State -->
    <div class="success-state" transition:slide>
      <div class="success-icon">
        <Check size={40} />
      </div>
      <h3>We'll Be In Touch!</h3>
      <p>
        Expect a {contactMethod === 'call' ? 'call' : contactMethod === 'whatsapp' ? 'WhatsApp message' : 'email'} within 30 minutes.
      </p>
      <button class="btn btn-ghost" on:click={resetForm}>
        Make Another Inquiry
      </button>
    </div>
  {:else}
    <!-- Header -->
    <div class="panel-header">
      <span class="price-label">FROM</span>
      <div class="price-main">
        <span class="price">${priceBreakdown.perPerson.toLocaleString()}</span>
        <span class="price-suffix">/ person</span>
      </div>
      <span class="price-meta">{safariPackage.duration} days • All-inclusive</span>
    </div>

    <!-- Form -->
    <div class="panel-body">
      <!-- Date Selection -->
      <div class="form-group">
        <label for="travel-date" class="label">Travel Date</label>
        <div class="input-with-icon">
          <Calendar size={18} />
          <input 
            type="date" 
            id="travel-date"
            bind:value={selectedDate}
            min={new Date().toISOString().split('T')[0]}
            class="input"
            placeholder="Select your dates"
          />
        </div>
      </div>

      <!-- Travelers -->
      <div class="form-group">
        <label class="label">Travelers</label>
        <div class="travelers-box">
          <div class="traveler-row">
            <div class="traveler-info">
              <span class="traveler-type">Adults</span>
              <span class="traveler-hint">Age 13+</span>
            </div>
            <div class="traveler-controls">
              <button 
                class="control-btn" 
                on:click={() => adults = Math.max(1, adults - 1)}
              >
                <Minus size={16} />
              </button>
              <span class="traveler-count">{adults}</span>
              <button 
                class="control-btn" 
                on:click={() => adults = Math.min(10, adults + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div class="traveler-row">
            <div class="traveler-info">
              <span class="traveler-type">Children</span>
              <span class="traveler-hint">Age 3-12 (25% off)</span>
            </div>
            <div class="traveler-controls">
              <button 
                class="control-btn" 
                on:click={() => children = Math.max(0, children - 1)}
              >
                <Minus size={16} />
              </button>
              <span class="traveler-count">{children}</span>
              <button 
                class="control-btn" 
                on:click={() => children = Math.min(6, children + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Add-ons -->
      <div class="form-group">
        <button class="addons-toggle" on:click={() => showAddOns = !showAddOns}>
          <span>Enhance Your Safari</span>
          <div class="toggle-right">
            {#if selectedAddOns.length > 0}
              <span class="badge badge-sand">{selectedAddOns.length} selected</span>
            {/if}
            <span class:rotated={showAddOns}><ChevronDown size={18} /></span>
          </div>
        </button>

        {#if showAddOns}
          <div class="addons-list" transition:slide>
            {#each safariPackage.optionalAddOns.slice(0, 4) as addOn}
              <button 
                class="addon-item"
                class:selected={selectedAddOns.includes(addOn.id)}
                on:click={() => onAddOnToggle(addOn.id)}
              >
                <div class="addon-info">
                  <span class="addon-name">{addOn.name}</span>
                  <span class="addon-desc">{addOn.description}</span>
                </div>
                <div class="addon-right">
                  <span class="addon-price">+${addOn.price}</span>
                  <div class="checkbox" class:checked={selectedAddOns.includes(addOn.id)}>
                    {#if selectedAddOns.includes(addOn.id)}
                      <Check size={12} />
                    {/if}
                  </div>
                </div>
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <hr class="divider" />

      <!-- Price Summary -->
      <div class="price-summary">
        <div class="summary-row">
          <span>${safariPackage.pricePerPerson.toLocaleString()} × {totalTravelers} travelers</span>
          <span>${priceBreakdown.basePrice.toLocaleString()}</span>
        </div>
        {#if children > 0}
          <div class="summary-row discount">
            <span>Child discount (25%)</span>
            <span>-${priceBreakdown.childDiscount.toLocaleString()}</span>
          </div>
        {/if}
        {#if priceBreakdown.addOnsTotal > 0}
          <div class="summary-row">
            <span>Add-ons</span>
            <span>${priceBreakdown.addOnsTotal.toLocaleString()}</span>
          </div>
        {/if}
        <div class="summary-row">
          <span class="with-info">
            Service fee
            <Info size={14} />
          </span>
          <span>${priceBreakdown.serviceFee.toLocaleString()}</span>
        </div>
        <hr class="divider dashed" />
        <div class="summary-row total">
          <span>Total</span>
          <span class="total-price">${priceBreakdown.total.toLocaleString()}</span>
        </div>
      </div>

      <hr class="divider" />

      <!-- Main CTA -->
      <button 
        class="btn cta-btn"
        class:outline={showContactForm}
        on:click={() => showContactForm = !showContactForm}
      >
        {showContactForm ? 'Hide Form' : 'Talk to Us First'}
      </button>

      <!-- Contact Form -->
      {#if showContactForm}
        <div class="contact-form" transition:slide>
          <p class="form-intro">
            Leave your details — we'll reach out within <strong>30 minutes</strong>
          </p>

          <!-- Contact Method -->
          <div class="contact-methods">
            <button 
              class="method-btn"
              class:selected={contactMethod === 'whatsapp'}
              on:click={() => contactMethod = 'whatsapp'}
            >
              <MessageCircle size={16} />
              WhatsApp
            </button>
            <button 
              class="method-btn"
              class:selected={contactMethod === 'call'}
              on:click={() => contactMethod = 'call'}
            >
              <Phone size={16} />
              Call
            </button>
            <button 
              class="method-btn"
              class:selected={contactMethod === 'email'}
              on:click={() => contactMethod = 'email'}
            >
              <Mail size={16} />
              Email
            </button>
          </div>

          <div class="form-group">
            <label for="name" class="label">Your name</label>
            <input type="text" id="name" class="input" placeholder="John Smith" bind:value={name} />
          </div>

          <div class="form-group">
            <label for="phone" class="label">Phone / WhatsApp</label>
            <input type="tel" id="phone" class="input" placeholder="+1 555 123 4567" bind:value={phone} />
          </div>

          <div class="form-group">
            <label for="email" class="label">Email</label>
            <input type="email" id="email" class="input" placeholder="john@example.com" bind:value={email} />
          </div>

          <div class="form-group">
            <label for="message" class="label">Questions or special requests</label>
            <textarea 
              id="message" 
              class="input textarea" 
              placeholder="Tell us about your group, dietary requirements..."
              bind:value={message}
            ></textarea>
          </div>

          <button 
            class="btn btn-submit"
            disabled={!isFormValid || isSubmitting}
            on:click={handleSubmit}
          >
            {#if contactMethod === 'whatsapp'}
              <MessageCircle size={20} />
            {:else if contactMethod === 'call'}
              <Phone size={20} />
            {:else}
              <Mail size={20} />
            {/if}
            {isSubmitting ? 'Sending...' : 'Get Response in <30 min'}
          </button>
        </div>
      {/if}

      <!-- Trust Badges -->
      <div class="trust-badges">
        <div class="badge-item">
          <Shield size={16} />
          <span>No payment required to inquire</span>
        </div>
        <div class="badge-item">
          <Clock size={16} />
          <span>Response within 30 minutes</span>
        </div>
      </div>
    </div>

    <!-- Quick WhatsApp -->
    <div class="panel-footer">
      <a 
        href="https://wa.me/254700000000?text={encodeURIComponent(`Hi! I'm interested in the ${safariPackage.name} for ${totalTravelers} travelers.`)}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn whatsapp-btn"
      >
        <MessageCircle size={20} />
        Chat on WhatsApp Now
      </a>
    </div>
  {/if}
</aside>

<style>
  .booking-panel {
    background: white;
    border-radius: 4px;
    box-shadow: var(--shadow-lg);
    position: sticky;
    top: 107px;
    overflow: hidden;
  }

  /* Success State */
  .success-state {
    padding: 48px 24px;
    text-align: center;
  }

  .success-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--color-forest);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }

  .success-state h3 {
    font-family: var(--font-primary);
    font-size: 28px;
    margin-bottom: 12px;
  }

  .success-state p {
    color: var(--ak-light-grey1);
    margin-bottom: 24px;
  }

  /* Header */
  .panel-header {
    background: var(--color-primary-dark);
    color: white;
    padding: 24px;
  }

  .price-label {
    font-size: 12px;
    opacity: 0.7;
    letter-spacing: 1px;
  }

  .price-main {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-top: 4px;
  }

  .price {
    font-family: var(--font-primary);
    font-size: 36px;
    line-height: 1;
  }

  .price-suffix {
    font-size: 14px;
    opacity: 0.7;
  }

  .price-meta {
    font-size: 14px;
    opacity: 0.7;
    margin-top: 8px;
    display: block;
  }

  /* Body */
  .panel-body {
    padding: 24px;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .input-with-icon {
    position: relative;
  }

  .input-with-icon :global(svg) {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--ak-light-grey1);
  }

  .input-with-icon .input {
    padding-left: 44px;
  }

  .textarea {
    min-height: 80px;
    resize: vertical;
  }

  /* Travelers */
  .travelers-box {
    padding: 16px;
    background: var(--color-linen);
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;
  }

  .traveler-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .traveler-row + .traveler-row {
    margin-top: 16px;
  }

  .traveler-type {
    font-size: 14px;
    font-weight: 500;
  }

  .traveler-hint {
    font-size: 12px;
    color: var(--ak-light-grey1);
    display: block;
  }

  .traveler-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .control-btn {
    width: 36px;
    height: 36px;
    border: 1px solid var(--color-light-grey);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background var(--transition-fast);
  }

  .control-btn:hover {
    background: var(--color-light-grey);
  }

  .traveler-count {
    width: 40px;
    text-align: center;
    font-weight: 600;
  }

  /* Add-ons */
  .addons-toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }

  .toggle-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .toggle-right :global(svg) {
    transition: transform var(--transition-fast);
  }

  .toggle-right :global(svg.rotated) {
    transform: rotate(180deg);
  }

  .addons-list {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .addon-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px;
    background: white;
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;
    cursor: pointer;
    text-align: left;
    transition: all var(--transition-fast);
  }

  .addon-item.selected {
    border: 2px solid var(--color-burnt-sienna);
    background: rgba(170, 84, 50, 0.04);
  }

  .addon-info {
    flex: 1;
  }

  .addon-name {
    font-size: 14px;
    font-weight: 500;
    display: block;
  }

  .addon-desc {
    font-size: 12px;
    color: var(--ak-light-grey1);
    display: block;
    margin-top: 2px;
  }

  .addon-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .addon-price {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-burnt-sienna);
  }

  .checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid var(--color-burnt-sienna);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkbox.checked {
    background: var(--color-burnt-sienna);
    color: white;
  }

  /* Price Summary */
  .price-summary {
    margin-bottom: 16px;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--ak-light-grey1);
    margin-bottom: 8px;
  }

  .summary-row.discount span:last-child {
    color: var(--color-forest);
  }

  .summary-row.total {
    font-weight: 600;
    color: var(--color-primary-dark);
  }

  .total-price {
    font-family: var(--font-primary);
    font-size: 26px;
  }

  .with-info {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .with-info :global(svg) {
    cursor: help;
  }

  .divider.dashed {
    border-style: dashed;
  }

  /* CTA Button */
  .cta-btn {
    width: 100%;
    padding: 16px;
    font-size: 15px;
    background: var(--color-burnt-sienna);
    color: white;
  }

  .cta-btn.outline {
    background: var(--color-linen);
    color: var(--color-primary-dark);
    border: 1px solid var(--color-light-grey);
  }

  /* Contact Form */
  .contact-form {
    margin-top: 16px;
  }

  .form-intro {
    font-size: 14px;
    color: var(--ak-light-grey1);
    text-align: center;
    margin-bottom: 16px;
  }

  .contact-methods {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .method-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    background: white;
    border: 1px solid var(--color-light-grey);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .method-btn.selected {
    border: 2px solid var(--color-burnt-sienna);
    background: rgba(170, 84, 50, 0.04);
  }

  .btn-submit {
    width: 100%;
    padding: 16px;
    background: var(--color-forest);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Trust Badges */
  .trust-badges {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .badge-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--ak-light-grey1);
  }

  .badge-item :global(svg) {
    color: var(--color-forest);
  }

  /* Footer */
  .panel-footer {
    padding: 16px 24px;
    border-top: 1px solid var(--color-light-grey);
    background: var(--color-linen);
  }

  .whatsapp-btn {
    width: 100%;
    padding: 14px;
    background: transparent;
    border: 1px solid #25D366;
    color: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-decoration: none;
  }

  .whatsapp-btn:hover {
    background: #25D366;
    color: white;
  }
</style>
