const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.description,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Dinner Delights offers personal chef services in central Iowa to meet any budget or needs. Meal selections are fully-customized to your taste and dietary needs."
      },
      {
        name: "keywords",
        content:
          "food,dinner,meals,personal chef,chef,supper,des moines,iowa,dsm,personal,andrea love,andrea,love"
      },
      { author: "Dinner Delights, LLC" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/manifest.json" },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#602650"
      }
    ],
    script: [
      {
        src: "~/assets/data/structured-data.json",
        type: "application/ld+json"
      },
      { src: "/js/jquery.min.js" },
      { src: "/js/bootstrap.min.js" },
      { src: "/js/jquery.flexslider.js" },
      { src: "/js/script.js" }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#602650" },

  /*
   ** Global CSS
   */
  css: [
    "~/assets/styles/vendor/bootstrap.css",
    "~/assets/styles/vendor/flexslider.css",
    "~/assets/styles/vendor/font-awesome.css",
    "~/assets/styles/styles.scss"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/components", "~/plugins/filters"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "storyblok-nuxt",
      { accessToken: "63BpkhFQebg7Q4rAIaFXsgtt", cacheProvider: "memory" }
    ]
  ],

  /*
   ** Router middleware
   */
  router: {
    middleware: "setCacheVersion"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    }
  }
};
