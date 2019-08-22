<script>
  import { inner, outer, expand } from "./logo.shape.ts";

  import { fade, draw, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let visible = false;
  setTimeout(() => (visible = true));
</script>

<style>
  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: white;
    opacity: 1;
  }
</style>

<h1>test</h1>

{#if visible}
  <!-- content here -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
    <g out:fade={{ duration: 200 }} opacity="0.2">
      <path
        in:expand={{ duration: 400, delay: 1000, easing: quintOut }}
        style="stroke: #ff3e00; fill: #ff3e00; stroke-width: 50;"
        d={outer} />
      <path
        in:draw={{ duration: 1000 }}
        style="stroke:#ff3e00; stroke-width: 1.5"
        d={inner} />
    </g>
  </svg>
{/if}
