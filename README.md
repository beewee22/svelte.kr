<p>
  <a href="https://svelte.dev">
	<img alt="Cybernetically enhanced web apps: Svelte" src="https://svelte-assets.surge.sh/banner.png">
  </a>

  <a href="https://www.npmjs.com/package/svelte">
    <img src="https://img.shields.io/npm/v/svelte.svg" alt="npm version">
  </a>

  <a href="https://packagephobia.now.sh/result?p=svelte">
    <img src="https://packagephobia.now.sh/badge?p=svelte" alt="install size">
  </a>

  <a href="https://travis-ci.org/sveltejs/svelte">
    <img src="https://api.travis-ci.org/sveltejs/svelte.svg?branch=master"
         alt="build status">
  </a>

  <a href="https://github.com/sveltejs/svelte/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/svelte.svg" alt="license">
  </a>
</p>

## Svelte란 무엇입니까?

Svelte(스벨트)는 웹 어플리케이션을 만드는 새로운 방법입니다. 이것은 사용자의 선언적인 컴포넌트를 정교하게 DOM을 업데이트하는 효율적인 자바스크립트 코드로 바꿔주는 컴파일러입니다.

[Svelte 웹사이트](https://svelte.dev)에서 더 많은 것을 배워보거나, [디스코드 채팅방](https://svelte.dev/chat)에 들러보세요.

## 개발에 참여하기

Pull request는 언제나 환영합니다. [이슈를 등록](https://github.com/sveltejs/svelte/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)하여 저희를 도와주세요!

로컬 환경에서 스벨트를 설치 및 작업하는 방법:

```bash
git clone https://github.com/sveltejs/svelte.git
cd svelte
npm install
```

> 많은 테스트들이 줄바꿈을 `<LF>`로 지키도록 짜여져 있습니다. 윈도우즈 환경이라면 `git clone`을 실행할 때에 다음의 명령어로 해결 가능합니다.
>
> ```bash
> git -c core.autocrlf=false clone https://github.com/sveltejs/svelte.git
> ```

컴파일러 및 패키지의 모든 모듈을 빌드하려면:

```bash
npm run build
```

변경사항을 실시간으로 반영하여 rebuild ([npm link](https://docs.npmjs.com/cli/link.html)를 사용하여 프로젝트의 변경사항을 로컬에서 테스트하는 경우에 유용합니다):

```bash
npm run dev
```

컴파일러는 [TypeScript](https://www.typescriptlang.org/)로 작성되었습니다. 하지만 꺼려할 필요 없습니다 — 기본적으로 이 코드들은 일반적인 자바스크립트에 타입 주석이 포함된 것 뿐입니다. 놀라울 정도로 금방 익힐 수 있습니다. 만약에 당신이 [Visual Studio Code](https://code.visualstudio.com/) 이외의 에디터를 사용하고 있다면, syntax highlighting과 code hints를 위한 플러그인을 설치해야 할 필요가 있을겁니다.

### 테스트 실행

```bash
npm run test
```

테스트 필터링을 위해서는, `-g` (혹은 `--grep`)를 사용하세요. 예를들면, transition과 관련된 테스트만을 실행시키려면:

```bash
npm run test -- -g transition
```

## svelte.dev

https://svelte.dev 의 소스코드, 관련된 모든 문서가 [site](site) 디렉토리에 있습니다. 사이트는 [Sapper](https://sapper.svelte.dev)로 만들어져 있습니다. 로컬 환경에서 개발하기 위해서는:

```bash
cd site
npm install && npm run update
npm run dev
```

## 라이센스

[MIT](LICENSE)
