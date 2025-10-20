import { defineStore } from 'pinia'

interface State {
    user: UserObject
    accessToken: string | null
    loggedIn: boolean
}

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: {} as UserObject,
            accessToken: null,
            loggedIn: false,
        }
    },
    persist: true,
    getters: {
        getToken(state) {
            return state.accessToken
        },
        getUser(state) {
            return state.user
        },
        getStatus(state) {
            return state.loggedIn
        },
    },
    actions: {
        async login(credentials: object) {
            try {
                const { $api } = useNuxtApp()
                const response: any = await $api('/customer/login', {
                    method: 'POST',
                    body: { ...credentials }
                })
                this.accessToken = response.token
                this.loggedIn = true
                this.user = response.user
                return navigateTo('/dashboard')
            } catch (error) {
                throw error
            }
        },
        async register(credentials: object) {
            try {
                const { $api } = useNuxtApp()
                const response: any = await $api('/customer/register', {
                    method: 'POST',
                    body: { ...credentials }
                })
                this.accessToken = response.token
                this.loggedIn = true
                this.user = response.user
                if(response.redirect_url){
                    window.location.href = response.redirect_url;
                }else {
                    navigateTo('/dashboard')
                }
            } catch (error) {
                throw error
            }
        },
        async userInfo() {
            try {
                const { $api } = useNuxtApp()
                const response: any = await $api('/me')
                this.user = response.user
            } catch (error) {
                throw error
            }
        },
        async logout() {
            try {
                const { $api } = useNuxtApp()
                const response: any = await $api('/logout', {
                    method: 'POST'
                })
                const reset = useResetStore()
                reset.resetStore()
            } catch (error) {
                const reset = useResetStore()
                reset.resetStore()
                throw error
            }
        },
    }
})

interface UserObject {
    name: string
    email: string
    avatar: string | null
}