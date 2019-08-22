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
  }

  ul {
    margin: 0;
    padding: 0;
    float: right;
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
  li.logo-wrap {
    height: 100%;
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
    padding: 1em 0.5em;
    display: block;
  }

  .icon {
    height: 20px;
  }
</style>

<nav>
  <a href="/">
    <Logo />
  </a>
  <ul>
    <li>
      <a class={segment === 'Tutorial' ? 'selected' : ''} href="Tutorial">
        Tutorial
      </a>
    </li>
    <li>
      <a class={segment === 'API' ? 'selected' : ''} href="API">API</a>
    </li>
    <li>
      <a class={segment === 'Examples' ? 'selected' : ''} href="Examples">
        Examples
      </a>
    </li>
    <li>
      <a class={segment === 'REPL' ? 'selected' : ''} href="REPL">REPL</a>
    </li>
    <li>
      <a class={segment === 'Blog' ? 'selected' : ''} href="Blog">Blog</a>
    </li>
    <li>
      <a class={segment === 'FAQ' ? 'selected' : ''} href="FAQ">FAQ</a>
    </li>
    <li>
      <a class={segment === 'Sapper' ? 'selected' : ''} href="Sapper">Sapper</a>
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
      <a class={segment === 'github' ? 'selected' : ''} href="github">
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
