import {
  component$,
  useVisibleTask$,
  useSignal,
  noSerialize,
  NoSerialize,
} from "@builder.io/qwik";
import lottie, { AnimationItem } from "lottie-web";

export interface QwikLottieProps {
  animationData?: object;
  path?: string;
  loop?: boolean | number;
  autoplay?: boolean;
  name?: string;
  renderer?: "svg" | "canvas" | "html";
  container?: HTMLElement;
  rendererSettings?: object;
}

export const QwikLottie = component$((props: QwikLottieProps) => {
  const {
    container,
    renderer = "svg",
    loop = true,
    autoplay = true,
    animationData,
    path,
    rendererSettings,
    name,
  } = props;
  const animation = useSignal<NoSerialize<AnimationItem>>();
  const canvas = useSignal<HTMLElement>();

  useVisibleTask$(() => {
    animation.value = noSerialize(
      lottie.loadAnimation({
        container: container
          ? (container as HTMLElement)
          : (canvas.value as HTMLElement),
        renderer,
        loop,
        autoplay,
        animationData,
        path,
        rendererSettings,
        name,
      })
    );
  });

  return <div ref={canvas}></div>;
});
