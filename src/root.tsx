import { QwikLottie } from "./lottie";
import * as confetti from "./assets/confetti.json";
import { component$, useSignal } from "@builder.io/qwik";
export default component$(() => {
  const container = useSignal<HTMLElement>();
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Lottie</title>
      </head>
      <body style={{ margin: "0px" }}>
        <div ref={container} style={{ height: "100vh" }}></div>
        <QwikLottie container={container.value} animationData={confetti} />
      </body>
    </>
  );
});
