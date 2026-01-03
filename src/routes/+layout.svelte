<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>ASIS Safaris | Authentic Kenya Safari Experiences</title>
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    padding-top: 87px;
    min-height: 100vh;
  }
</style>
