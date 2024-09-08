import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
    state: () =>({
        prices: 0
    }),

    actions: {
        getPrice(prices: number){
            this.prices = prices;
        }
    }
})