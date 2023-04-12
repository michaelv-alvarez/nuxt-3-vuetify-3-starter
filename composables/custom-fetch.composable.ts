export const useCustomFetch = (request, opts) => {
  const config = useRuntimeConfig()
  return useFetch(request, {
    baseURL: config.public.baseURL,
    async onRequest({ request, options }) {
      const { getSession } = useSession();
      const session = await getSession();
      const token = (session as any).accessToken;
      if (token) {
        options.headers = {
          Authorization : `Bearer ${token}`
        }
      }
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      // Process the response data
      return response._data
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    },
    ...opts
  })
}