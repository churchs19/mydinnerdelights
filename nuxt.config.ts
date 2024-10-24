// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: process.env.NUXT_PUBLIC_NODE_ENV === "development" ? true : false,
  },
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
      },
    ],
  ],
  css: [
    "~/assets/styles/vendor/bootstrap.css",
    "~/assets/styles/vendor/flexslider.css",
    "~/assets/styles/vendor/font-awesome.css",
    "~/assets/styles/styles.scss",
  ],
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/manifest.json" },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#602650",
        },
      ],
      script: [
        {
          src: "/data/structured-data.json",
          type: "application/ld+json",
        },
        { src: "/js/jquery.min.js" },
        { src: "/js/bootstrap.min.js" },
        { src: "/js/lodash.js" },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/terms-of-service", "/privacy-policy"],
    },
  },
  hooks: {
    "vite:extendConfig": (config, { isClient, isServer }) => {
      if (isClient) {
        config.resolve.alias.vue = "vue/dist/vue.esm-bundler";
      }
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: '@use "~/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
});
