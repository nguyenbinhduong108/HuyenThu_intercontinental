import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {} as any
    }),

    actions: {
        setUser(user: any) {
            this.user = user;
        }
    }
})