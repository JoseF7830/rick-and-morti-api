import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxtjs/tailwindcss", "@nuxt/image"],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    },
  },

  image: {
    domains: ["rickandmortyapi.com/"]
  },

  compatibilityDate: "2024-10-13"
})