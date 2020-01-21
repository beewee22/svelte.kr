export interface ITarget {
  name: string
  repo: string
  path: string
  install: string
  build: string
  static: boolean
}

export default [
  {
    name: "svelte",
    repo: "sveltejs/svelte",
    path: "/site",
    install: "npm install && npm run update",
    build: "npm run sapper",
    static: false
  },
  {
    name: "svelte-native",
    repo: "halfnelson/svelte-native",
    path: "/docs_src",
    install: "npm install",
    build: "npm run export",
    static: true
  },
  {
    name: "sapper",
    repo: "sveltejs/sapper",
    path: "/site",
    install: "npm install",
    build: "npm run export",
    static: true
  }
] as ITarget[]
