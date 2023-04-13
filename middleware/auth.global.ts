// file: ~/middleware/authentication.global.ts
export default defineNuxtRouteMiddleware((to) => {
    const { status, signIn } = useSession()

    // Return to login immeadiatly if user is not authenticated
    if (status.value === 'unauthenticated') {
        if (to.fullPath === '/auth/login') {
            return
        }
        return navigateTo('/auth/login')
    }
    // Return to home immeadiatly if user is already authenticated

    if (status.value === 'authenticated') {
        if (to.fullPath === '/auth/login') {
            return navigateTo('/')
        }
    }


    /**
     * We cannot directly call and/or return `signIn` here as `signIn` uses async composables under the hood, leading to "nuxt instance undefined errors", see https://github.com/nuxt/framework/issues/5740#issuecomment-1229197529
     *
     * So to avoid calling it, we return it immeadiatly.
     */
    // return signIn(undefined, { callbackUrl: to.path }) as ReturnType<typeof navigateTo>

})
