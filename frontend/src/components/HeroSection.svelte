<script lang="ts">
  import Globe from './globe.svelte';
</script>

<section class="relative h-screen flex justify-center items-center text-center overflow-hidden bg-lapis">
  <Globe />

  <!-- Overlay Hero Content -->
  <div class="absolute z-10 max-w-2xl px-5">
    <h1 class="text-6xl font-black uppercase mb-4 glow-text">Enter the Abyss</h1>
    <p class="text-2xl mb-8 text-yellow">Scroll deeper to unveil the chaos</p>
    <a href="#section1" class="px-9 py-3 bg-orange text-white font-bold rounded-xl text-xl transition transform hover:scale-110 hover:bg-yellow hover:text-black glow-button">
      Begin Your Descent
    </a>
  </div>
</section>

<style>
.glow-text {
  text-shadow: 0 0 10px #f26419, 0 0 20px #f6ae2d, 0 0 30px #f26419;
}
.glow-button {
  box-shadow: 0 0 20px #f26419, 0 0 40px #f6ae2d;
}
</style>
