<script>
  import Logo from "./logo.svelte";
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--nav-h);
    padding: 0 var(--side-nav) 0 var(--side-nav);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    transform: none;
    transition: none;
    box-shadow: none;
    z-index: 2;
    background-color: white;
    box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);

  }

  ul {
    margin: 0;
    padding: 0;
    float: right;
    display: inline-flex;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: inline-flex;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    display: block;
    border-bottom: none;
    font-size: var(--h5);
    padding: 0 1rem;
    border: none;
    color: inherit;
    font-family: var(--font);
    display: inline-flex;
  }

  .icon {
    height: 20px;
  }
  svg {
    transform-origin: center center;
    stroke: black;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  
</style>

<nav>
  <a href="/" style="padding: 0">
    <Logo />
  </a>
  <ul>
    <li>
      <a class={segment === 'Tutorial' ? 'selected' : ''} href="https://svelte.dev/tutorial/">
        Tutorial
      </a>
    </li>
    <li>
      <a class={segment === 'API' ? 'selected' : ''} href="API">API</a>
    </li>
    <li>
      <a class={segment === 'Examples' ? 'selected' : ''} href="https://svelte.dev/examples">
        Examples
      </a>
    </li>
    <li>
      <a class={segment === 'REPL' ? 'selected' : ''} href="https://svelte.dev/repl/">REPL</a>
    </li>
    <li>
      <a class={segment === 'Blog' ? 'selected' : ''} href="https://svelte.dev/blog">Blog</a>
    </li>
    <li>
      <a class={segment === 'FAQ' ? 'selected' : ''} href="https://github.com/sveltejs/svelte/wiki/FAQ">FAQ</a>
    </li>
    <li>
      <a class={segment === 'Sapper' ? 'selected' : ''} href="https://sapper.svelte.dev/">Sapper</a>
    </li>
    <li>
      <a href="https://discordapp.com/invite/yy75DKs">
        <svg id="message-square" class="icon" viewBox="0 0 24 24">
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </a>
    </li>
    <li>
      <a class={segment === 'github' ? 'selected' : ''} href="https://github.com/sveltejs/svelte">
        <svg id="github" class="icon" viewBox="0 0 24 24">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
            0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07
            5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
            5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42
            3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      </a>
    </li>
  </ul>
</nav>
