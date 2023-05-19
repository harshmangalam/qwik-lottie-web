# Qwik Lottie Web ⚡️

---

## Install

```sh
npm i qwik-lottie-web
```

```sh
pnpm i qwik-lottie-web
```

```sh
yarn add qwik-lottie-web
```

## Usage

```js

import { component$, useSignal } from "@builder.io/qwik";

import { QwikLottie } from "qwik-lottie-web";

import * as confetti from "./assets/confetti.json";
export default component$(() => {
   const container = useSignal<HTMLElement>();
  return (
    <QwikLottie container={container.value} animationData={confetti} />
  );
});


```
