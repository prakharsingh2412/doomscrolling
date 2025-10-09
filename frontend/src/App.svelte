<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/HeroSection.svelte'; 
  import ScrollSection from './components/ScrollSection.svelte';
</script>

<Navbar />

<main class="pt-16">
  <!-- 🌍 Hero Section with Globe -->
  <Hero />

   <!-- 📜 Scroll Stages -->
  <ScrollSection
    id="section1"
    title="Stage 1"
    text="Scroll content section 1 - Keep scrolling to see the scroll tracker in action!"
    bg="bg-lapis"
    textColor="text-white"
  />
  <ScrollSection
    id="section2"
    title="Stage 2"
    text="Scroll content section 2 - Keep scrolling to see the scroll tracker in action!"
    bg="bg-carolina"
    textColor="text-black"
  />
  <ScrollSection
    id="section3"
    title="Stage 3"
    text="Scroll content section 3 - Keep scrolling to see the scroll tracker in action!"
    bg="bg-moss"
    textColor="text-white"
  />
</main>
