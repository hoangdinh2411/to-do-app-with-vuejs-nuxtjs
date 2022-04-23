export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "todo-app-nuxt-js",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui"],

  axios: {
    baseURL: "https://api.jsonbin.io/v3/b/6262db4fbc312b30ebeb71ba",
    timeout: 10000,
    headers: {
      "X-Master-Key":
        "$2b$10$Vk7WtdXZWVdBZZOg5xtZ7efgP2Vzcm7.0xFShfs68AoRlvxwyv1aW",
      "content-type": "application/json",
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: "https://api.jsonbin.io/v3/b/6262db4fbc312b30ebeb71ba",
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: "https://api.jsonbin.io/v3/b/6262db4fbc312b30ebeb71ba",
    },
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
