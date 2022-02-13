export const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i) === null ? false : true;
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null
      ? false
      : true;
  },
  any: () => {
    return isMobile.Android() || isMobile.iOS();
  },
};
