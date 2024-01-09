// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  generate: {
    routes: ["/"],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  modules: ["@nuxt/content", "@nuxt/image", "@nuxt/ui", "nuxt-swiper"],
  ui: {
    global: true,
    icons: ["mdi", "ion"],
  },
  content: {
    documentDriven: true,
  },
  tailwindcss: {
    cssPath: "@/assets/style/tailwind.css",
  },
  css: ["@/assets/style/main.scss"],
  colorMode: {
    preference: "light",
    fallback: "light",
    classPrefix: "",
    storageKey: "nuxt-color-mode",
  },
  build: {
    transpile: ["newzen-connector"],
  },
});
