<script lang="ts">
  import { onMount } from 'svelte';

  let container: HTMLDivElement;

  onMount(() => {
    // @ts-ignore since DAT is a global variable from globe.js
    const DAT = (window as any).DAT;

    if (!DAT || !container) {
      console.error("DAT.Globe not found. Make sure globe.js is loaded.");
      return;
    }

    // Create the globe (it will automatically inject the WebGL canvas)
    const globe = new DAT.Globe(container);

    // Fetch data and add to globe
    fetch('/myjson.json')
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          globe.addData(data[i][1], { format: 'magnitude', name: data[i][0] });
        }
        globe.createPoints();
        globe.animate();
      })
      .catch(err => console.error('Error loading globe data:', err));
  });
</script>

<!-- 👇 This is the only element you need -->
<div bind:this={container} id="container" class="w-full h-screen"></div>
