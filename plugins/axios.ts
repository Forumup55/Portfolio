import axios from "axios";
import { useStore } from "~/store";
export default defineNuxtPlugin(async ({ $i18n, $config }) => {
  const i18n: any = $i18n;

  const router = useRouter();
  const store = useStore();
  const localePath = useLocalePath();
  let api = axios.create({
    baseURL: $config.public.baseURL,
    headers: {
      common: {
        Accept: "application/json",
        "Accept-Language": i18n.locale.value,
      },
    },
  });
  api.interceptors.request.use(
    function (config) {
      if (useCookie($config.public.tokenName).value)
        config.headers.Authorization = `Bearer ${
          useCookie($config.public.tokenName).value
        }`;

      return config;
    },
    function (error) {
      if (error.response?.status == "401") {
        useCookie($config.public.tokenName).value = null;
        useCookie($config.public.profileName).value = null;
        store.setAuth(false);
        store.setProfile(null);

        router.push(localePath("/"));
      }
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response?.status == "401") {
        useCookie($config.public.profileName).value = null;
        useCookie($config.public.tokenName).value = null;
        store.setAuth(false);
        store.setProfile(null);

        router.push(localePath("/"));
      }
      return Promise.reject(error);
    }
  );
  return {
    provide: {
      axios: api,
      axiosToken: axios,
    },
  };
});
