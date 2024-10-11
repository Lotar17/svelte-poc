<script>
  import '../app.css';
  import { fly } from 'svelte/transition';
</script>

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
/>

<div
  class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
>
  <slot />
</div>

<style lang="postcss">
  :global(html) {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #f5f5f5;
  }
</style>
