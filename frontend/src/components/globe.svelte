<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  
  let container: HTMLDivElement;
  let isLoading = true;
  let error: string | null = null;
  let globe: any;

  async function initGlobe() {
    try {
      console.log('Initializing globe...');
      
      // Check WebGL support
      if (!window.WebGLRenderingContext) {
        throw new Error('WebGL is not supported in this browser');
      }

      // Make THREE globally available
      (window as any).THREE = THREE;
      console.log('THREE.js initialized:', THREE.REVISION);

      if (!container) {
        throw new Error('Container element not found');
      }

      // Wait for container to be properly sized
      await new Promise(resolve => setTimeout(resolve, 100));
      console.log('Container dimensions:', container.clientWidth, container.clientHeight);

      // Initialize globe
      globe = new (window as any).DAT.Globe(container, {
        imgDir: '/globe/',
        colorFn: (x: number) => {
          const c = new THREE.Color();
          c.setHSL(0.1 - (x * 0.1), 1.0, 0.5);
          return c;
        }
      });

      console.log('Globe instance created');

      const response = await fetch('/myjson.json');
      if (!response.ok) {
        throw new Error(`Failed to load globe data: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Loaded data:', data);

      // Add data points
      data.forEach((series: any[], index: number) => {
        console.log(`Adding data series ${index}:`, series[0]);
        globe.addData(series[1], {
          format: 'magnitude',
          name: series[0],
          animated: true
        });
      });

      globe.createPoints();
      console.log('Points created');
      
      globe.animate();
      console.log('Animation started');
      
      isLoading = false;

    } catch (err) {
      console.error('Globe initialization error:', err);
      error = err instanceof Error ? err.message : 'Failed to initialize globe';
      isLoading = false;
    }
  }

  onMount(() => {
    console.log('Component mounted, loading globe.js...');
    const script = document.createElement('script');
    script.src = '/globe.js';
    script.onload = () => {
      console.log('globe.js loaded successfully');
      initGlobe();
    };
    script.onerror = (e) => {
      console.error('Failed to load globe.js:', e);
      error = 'Failed to load globe.js';
      isLoading = false;
    };
    document.body.appendChild(script);

    return () => {
      if (globe?.animate) {
        console.log('Cleaning up globe instance');
        delete (window as any).DAT;
        document.body.removeChild(script);
      }
    };
  });
</script>

<div class="relative w-full h-screen bg-black">
  {#if isLoading}
    <div class="absolute inset-0 flex items-center justify-center text-white">
      <div class="text-center">
        <div class="mb-4">Loading globe visualization...</div>
        <div class="w-12 h-12 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  {/if}

  {#if error}
    <div class="absolute inset-0 flex items-center justify-center text-red-500 p-4">
      <div class="bg-black/80 rounded-lg p-4">
        Error: {error}
      </div>
    </div>
  {/if}

  <div 
    bind:this={container} 
    id="container" 
    class="w-full h-full transition-opacity duration-500"
    class:opacity-0={isLoading || error}
    class:opacity-100={!isLoading && !error}
  />
</div>

<style>
  :global(canvas) {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
</style>