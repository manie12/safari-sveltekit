<script lang="ts">
  import { slide } from 'svelte/transition';
  import { MapPin, Clock, Car, Plane, Check, Plus, Coffee, ChevronDown, Star } from 'lucide-svelte';
  import type { ItineraryDay } from '$lib/types';

  export let day: ItineraryDay;
  export let isExpanded = false;
  export let onToggle: () => void = () => {};
  export let onAddActivity: (name: string, price: number) => void = () => {};

  const mealIcons: Record<string, string> = {
    breakfast: 'B',
    lunch: 'L',
    dinner: 'D',
  };

  $: TravelIcon = day.travelInfo?.method === 'flight' ? Plane : Car;
</script>

<article class="day-card" class:expanded={isExpanded}>
  <!-- Header - Clickable -->
  <button class="day-header" on:click={onToggle}>
    <div class="day-image-container">
      <img src={day.image} alt={day.title} class="day-image" />
      <span class="day-badge">Day {day.day}</span>
    </div>

    <div class="day-summary">
      <div class="day-info">
        <!-- Location -->
        <div class="day-location">
          <MapPin size={14} />
          <span>{day.location}</span>
        </div>

        <!-- Title -->
        <h3 class="day-title">{day.title}</h3>

        <!-- Description Preview -->
        <p class="day-description">{day.description.split('\n')[0]}</p>
      </div>

      <!-- Bottom Info -->
      <div class="day-meta">
        <div class="day-meta-left">
          <!-- Meals -->
          <div class="meta-item">
            <Coffee size={14} />
            {#each day.meals as meal}
              <span class="meal-badge">{mealIcons[meal]}</span>
            {/each}
          </div>

          <!-- Travel Info -->
          {#if day.travelInfo}
            <div class="meta-item">
              <svelte:component this={TravelIcon} size={14} />
              <span>{day.travelInfo.duration}</span>
            </div>
          {/if}
        </div>

        <!-- Expand Toggle -->
        <div class="expand-toggle">
          <span>{isExpanded ? 'Less' : 'Details'}</span>
          <span class="chevron" class:rotated={isExpanded}>
            <ChevronDown size={18} />
          </span>
        </div>
      </div>
    </div>
  </button>

  <!-- Expanded Content -->
  {#if isExpanded}
    <div class="day-content" transition:slide={{ duration: 300 }}>
      <!-- Full Description -->
      <p class="full-description">{day.description}</p>

      <div class="content-grid">
        <!-- Highlights -->
        <div class="content-section">
          <h4>Highlights</h4>
          <ul class="highlights-list">
            {#each day.highlights as highlight}
              <li>
                <span class="highlight-icon"><Check size={12} /></span>
                {highlight}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Activities -->
        <div class="content-section">
          <h4>Activities</h4>
          <div class="activities-list">
            {#each day.activities as activity}
              <div class="activity-item" class:included={activity.included}>
                <div class="activity-info">
                  <div class="activity-header">
                    <span class="activity-name">{activity.name}</span>
                    {#if activity.included}
                      <span class="included-badge">Included</span>
                    {/if}
                  </div>
                  <div class="activity-duration">
                    <Clock size={12} />
                    {activity.duration}
                  </div>
                </div>
                {#if !activity.included && activity.price}
                  <button 
                    class="add-btn"
                    on:click|stopPropagation={() => onAddActivity(activity.name, activity.price || 0)}
                  >
                    <Plus size={14} />
                    ${activity.price}
                  </button>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Accommodation -->
      <div class="accommodation-section">
        <h4>Your Accommodation</h4>
        <div class="accommodation-card">
          <img src={day.accommodation.image} alt={day.accommodation.name} class="accommodation-image" />
          <div class="accommodation-info">
            <div class="accommodation-header">
              <h5>{day.accommodation.name}</h5>
              {#if day.accommodation.rating}
                <span class="rating-badge">
                  <Star size={10} />
                  {day.accommodation.rating}
                </span>
              {/if}
            </div>
            <span class="accommodation-type">{day.accommodation.type.replace('-', ' ')}</span>
            <p class="accommodation-description">{day.accommodation.description}</p>
            <div class="amenities">
              {#each day.accommodation.amenities.slice(0, 5) as amenity}
                <span class="amenity-badge">{amenity}</span>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</article>

<style>
  .day-card {
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: box-shadow var(--transition-base);
  }

  .day-card.expanded {
    box-shadow: var(--shadow-md);
  }

  .day-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .day-image-container {
    position: relative;
    height: 160px;
    overflow: hidden;
  }

  .expanded .day-image-container {
    height: 220px;
  }

  .day-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: height var(--transition-base);
  }

  .day-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: var(--color-burnt-sienna);
    color: white;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .day-summary {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .day-location {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--ak-light-grey1);
    margin-bottom: 8px;
  }

  .day-location :global(svg) {
    color: var(--color-warm-sand);
  }

  .day-title {
    font-family: var(--font-primary);
    font-size: 24px;
    font-weight: 400;
    color: var(--color-primary-dark);
    line-height: 1.3;
    margin: 0;
  }

  .day-description {
    font-size: 14px;
    color: var(--ak-light-grey1);
    line-height: 1.7;
    margin-top: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .day-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }

  .day-meta-left {
    display: flex;
    gap: 20px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: var(--ak-light-grey1);
  }

  .meta-item :global(svg) {
    color: var(--ak-light-grey1);
  }

  .meal-badge {
    font-weight: 600;
  }

  .expand-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-burnt-sienna);
  }

  .chevron {
    display: inline-flex;
    transition: transform var(--transition-base);
  }

  .chevron.rotated {
    transform: rotate(180deg);
  }

  /* Expanded Content */
  .day-content {
    border-top: 1px solid var(--color-light-grey);
    background: var(--color-linen);
    padding: 24px;
  }

  .full-description {
    white-space: pre-line;
    line-height: 1.8;
    color: var(--color-icon-dark);
    margin-bottom: 24px;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: 24px;
  }

  .content-section h4 {
    font-family: var(--font-primary);
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .highlights-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .highlights-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
  }

  .highlight-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color-warm-sand);
    color: white;
    flex-shrink: 0;
  }

  .activities-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .activity-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: white;
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;
  }

  .activity-item:not(.included) {
    background: transparent;
    border-style: dashed;
    border-color: var(--color-warm-sand);
  }

  .activity-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .activity-name {
    font-size: 14px;
    font-weight: 500;
  }

  .included-badge {
    font-size: 10px;
    font-weight: 600;
    background: var(--color-forest);
    color: white;
    padding: 2px 8px;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .activity-duration {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: var(--ak-light-grey1);
    margin-top: 4px;
  }

  .add-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background: var(--color-burnt-sienna);
    color: white;
    font-size: 13px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background var(--transition-fast);
  }

  .add-btn:hover {
    background: var(--color-burnt-sienna-hover);
  }

  /* Accommodation */
  .accommodation-section h4 {
    font-family: var(--font-primary);
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .accommodation-card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 20px;
    background: white;
    border: 1px solid var(--color-light-grey);
    padding: 16px;
  }

  .accommodation-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 4px;
  }

  .accommodation-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }

  .accommodation-header h5 {
    font-family: var(--font-primary);
    font-size: 22px;
    font-weight: 400;
    margin: 0;
  }

  .rating-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    background: var(--color-warm-sand);
    color: var(--color-primary-dark);
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 2px;
  }

  .accommodation-type {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--ak-light-grey1);
  }

  .accommodation-description {
    font-size: 14px;
    color: var(--ak-light-grey1);
    margin: 8px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .amenities {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .amenity-badge {
    font-size: 11px;
    padding: 4px 10px;
    border: 1px solid var(--color-light-grey);
    border-radius: 2px;
    color: var(--ak-light-grey1);
  }

  @media (max-width: 768px) {
    .day-header {
      grid-template-columns: 1fr;
    }

    .day-image-container {
      height: 200px;
    }

    .content-grid {
      grid-template-columns: 1fr;
    }

    .accommodation-card {
      grid-template-columns: 1fr;
    }

    .accommodation-image {
      height: 180px;
    }
  }
</style>
