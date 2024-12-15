// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "robots",
          // content: `index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large`,
          content: `noindex, nofollow`,
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/coding.png" }],
      style: [],
      script: [],
    },
  },

  css: ["~/assets/style/main.scss"],

  plugins: [
    // { src: "~/plugins/socket.io.client.js", mode: "client" },
    "~/plugins/rate.js",
    "~/plugins/VueDatePicker.js",
    "~/plugins/i18n.client.js",
    "~/plugins/vue3-toastify.client.js",
    { src: "~/plugins/VueMaps.ts", mode: "client" },
    "~/plugins/v-pagination.ts",
    "~/plugins/VeeValidate.ts",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "nuxt-simple-sitemap",
    "@pinia/nuxt",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "EN",
            code: "en",
            iso: "en-US",
            file: "en.json",
            dir: "ltr",
          },
          {
            name: "AR",
            code: "ar",
            iso: "ar-AR",
            file: "ar.json",
            dir: "rtl",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "en",
        detectBrowserLanguage: false,
        vueI18nLoader: true,
      },
    ],
    [
      "@vee-validate/nuxt",
      {
        // autoImports: true,
        // componentNames: {
        //   Form: "VeeForm",
        //   Field: "VeeField",
        //   ErrorMessage: "VeeErrorMessage",
        // },
      },
    ],
    "nuxt-swiper",
  ],

  runtimeConfig: {
    public: {
      baseURL: "",
      baseGeneralURL: "",
      tokenName: "",
      profileName: "",
    },
  },

  build: {
    transpile: [
      "@vuepic/vue-datepicker",
      "vue3-toastify",
      "@fawmi/vue-google-maps",
      "swiper",
      "vue-picture-cropper",
    ],
  },

  vite: {
    // Vite specific configuration
    optimizeDeps: {
      include: ["fast-deep-equal"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler", // or "modern"
        },
      },
    },
    plugins: [svgLoader()],
    build: {
      minify: "terser", // or 'esbuild' (default)
      terserOptions: {
        compress: {
          drop_console: true, // removes console logs
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  },

  // site: {
  //   url: "/",
  //   name: "Portfolio,
  // },

  // sitemap: {
  //   urls: async () => {},
  //   exclude: [],
  //   xslTips: false,
  //   _route: "sitemap",
  //   sitemaps: false,
  // },

  spaLoadingTemplate: false,

  compatibilityDate: "2024-07-21",

  routeRules: {},

  experimental: {
    inlineSSRStyles: false,
  },
});
