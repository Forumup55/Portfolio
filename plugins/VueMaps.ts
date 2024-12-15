import { defineNuxtPlugin } from "#app";
import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAJAErFdjZFhRCo4LK0EYM-2h9_p_HFRS8",
      libraries: ["drawing", "places"], // This is required if you use the Autocomplete plugin
    },
    autobindAllEvents: true,
  });
});
