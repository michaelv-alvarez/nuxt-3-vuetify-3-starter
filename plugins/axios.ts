import axios from "axios";
export default defineNuxtPlugin(async (nuxtApp) => {
  const baseURL = `${process.env.NUXT_PUBLIC_API_BASE_URL}`;
  const { getSession } = useSession();
  const session = await getSession();
  let api = axios.create({
    baseURL,
    headers: {
      Authorization: (session as any).accessToken || '',
    },
  });
  return {
    provide: {
      axios: api,
    },
  };
});