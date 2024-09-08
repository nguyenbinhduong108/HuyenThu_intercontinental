import { defineStore } from 'pinia'
//quản lý trạng thái trong vue, 
export const useDatesStore = defineStore('dates', {
    state: () => ({
        checkIn: '',
        checkOut: '',
    }),

    getters: {
        total: (state) => {
            const date1 = new Date(state.checkIn);
            const date2 = new Date(state.checkOut);

            // Bước 2: Tính số mili-giây giữa hai ngày
            const timeDifference = date2.getTime() - date1.getTime()

            // Bước 3: Tính số ngày bằng cách chia số mili-giây cho số mili-giây trong một ngày
            const millisecondsPerDay = 1000 * 60 * 60 * 24;
            const daysDifference = timeDifference / millisecondsPerDay;
            return daysDifference;
        }
    },

    actions: {
        getCheckIn(checkIn: any) {
            this.checkIn = checkIn;
        },

        getCheckOut(checkOut: any) {
            this.checkOut = checkOut;
        },
    }
})
