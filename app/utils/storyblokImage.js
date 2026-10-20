// Resizes Storyblok assets through the image service (https://www.storyblok.com/docs/image-service)
// so the browser isn't sent the original upload. Non-Storyblok URLs pass through unchanged.
const STORYBLOK_ASSET = /^(?:https?:)?\/\/(a\.storyblok\.com\/f\/\d+\/(\d+)x(\d+)\/.*)$/;

export const storyblokImage = (rawUrl, widths = [600, 900, 1200]) => {
  const match = rawUrl?.match(STORYBLOK_ASSET);
  if (!match) {
    return { src: rawUrl };
  }

  // Older content stores http:// or protocol-relative asset URLs
  const url = `https://${match[1]}`;

  const width = Number(match[2]);
  const height = Number(match[3]);
  const usable = widths.filter((w) => w <= width);
  if (usable.length === 0) {
    return { src: url, width, height };
  }

  const resized = (w) => `${url}/m/${w}x0`;
  return {
    src: resized(usable.at(-1)),
    srcset: usable.map((w) => `${resized(w)} ${w}w`).join(", "),
    width,
    height,
  };
};
