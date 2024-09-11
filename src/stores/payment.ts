import { defineStore } from 'pinia'

export const usePaymentStore = defineStore('payment', {
    state: () =>({
        payment: {
            "userId": '',
            "roomNumber": '',
            "userName": '',
            "checkInDate": '',
            "checkOutDate": '',
            "totalPrice": '',
            "email": '',
            "adress": '',
            "phoneNumer": '',
            "serviceId": []
        }
    }),

    actions: {
        getInfoPayment(payment: any){
            this.payment = payment
        }
    }
})