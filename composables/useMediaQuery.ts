// useMedia.js
import { ref, watchEffect } from "vue";

export const useMediaQuery = (query: string): Ref<boolean> => {
  if (process.server === true) {
    return ref(false);
  }

  const matches = ref(true);

  watchEffect((onInvalidate) => {
    const media = window.matchMedia(query);

    if (media.matches !== matches.value) {
      matches.value = media.matches;
    }

    const changeHandler = (): void => {
      matches.value = media.matches;
    };

    media.addEventListener("change", changeHandler);

    onInvalidate(() => {
      media.removeEventListener("change", changeHandler);
    });
  });

  return matches;
};
