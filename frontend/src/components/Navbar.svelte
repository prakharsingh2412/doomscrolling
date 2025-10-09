<script lang="ts">
  import { writable } from 'svelte/store';
  let open = writable(false);

  function toggleMenu() {
    open.update(o => !o);
  }
</script>

<nav class="fixed w-full bg-lapis text-white flex justify-between items-center p-4 z-50 border-b-4 border-orange">
  <div class="text-2xl font-bold">DoomScroller</div>

  <ul class="hidden md:flex space-x-8">
    <li><a href="#section1" class="text-yellow hover:text-orange transition-colors">Stage 1</a></li>
    <li><a href="#section2" class="text-yellow hover:text-orange transition-colors">Stage 2</a></li>
    <li><a href="#section3" class="text-yellow hover:text-orange transition-colors">Stage 3</a></li>
  </ul>

  <!-- Mobile Burger -->
  <div class="md:hidden flex flex-col gap-1 cursor-pointer" on:click={toggleMenu}>
    <span class="w-6 h-0.5 bg-orange transition-transform" class:rotate-45={$open}></span>
    <span class="w-6 h-0.5 bg-orange transition-opacity" class:opacity-0={$open}></span>
    <span class="w-6 h-0.5 bg-orange transition-transform" class:-rotate-45={$open}></span>
  </div>

  <!-- Mobile Menu -->
  {#if $open}
    <ul class="absolute top-16 right-0 bg-lapis w-1/2 h-screen flex flex-col items-center justify-start pt-10 space-y-8 md:hidden transition-transform">
      <li><a href="#section1" on:click={() => open.set(false)} class="text-yellow hover:text-orange">Stage 1</a></li>
      <li><a href="#section2" on:click={() => open.set(false)} class="text-yellow hover:text-orange">Stage 2</a></li>
      <li><a href="#section3" on:click={() => open.set(false)} class="text-yellow hover:text-orange">Stage 3</a></li>
    </ul>
  {/if}
</nav>
