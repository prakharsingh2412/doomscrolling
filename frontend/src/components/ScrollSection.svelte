<script lang="ts">
  export let id: string;
  export let title: string;
  export let text: string;
  export let bg: string;
  export let textColor: string;
</script>

<section id={id} class={`h-screen flex flex-col justify-center items-center text-center p-8 ${bg} ${textColor}`}>
  <h1 class="text-5xl mb-4">{title}</h1>
  <p class="text-lg">{text}</p>
</section>