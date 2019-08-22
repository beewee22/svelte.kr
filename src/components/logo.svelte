<script>
  import { inner, outer, expand } from "./logo.shape.ts";

  import { fade, draw, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let visible = false;
  setTimeout(() => (visible = true));
</script>

<style>
  .logo-container {
    width: 100px;
    margin: 0px 10px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo-symbol {
    flex: 0 0 20px;
  }
  .logo-type {
    flex: 0 0 60px;
    max-width: 60px;
  }
  .logo-korea {
    font-size: 12px;
    flex: 0 0 10px;
    align-self: flex-end;
    text-align: left;
    position: relative;
    top: -1px;
  }

  path {
    fill: white;
    opacity: 1;
  }
</style>

<section class="logo-container">
  <!-- content here -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 103 124"
    class="logo-symbol">
    {#if visible}
      <g out:fade={{ duration: 200 }} opacity="1">
        <path
          in:expand={{ duration: 400, delay: 1000, easing: quintOut }}
          style="stroke: #ff3e00; fill: #ff3e00; stroke-width: 50;"
          d={outer} />
        <path
          in:draw={{ duration: 1000 }}
          style="stroke:#ff3e00; stroke-width: 1.5"
          d={inner} />
      </g>
    {/if}
  </svg>
  <img alt="Svelte logotype" class="logo-type" src="svelte-logotype.svg" />
  <span class="logo-korea">.kr</span>
</section>
