import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(rate);
});