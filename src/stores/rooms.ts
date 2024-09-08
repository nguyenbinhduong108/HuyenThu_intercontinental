import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRoomStore = defineStore('rooms', {
    state: () => ({
        rooms: {}
    }),

    actions: {
        getRooms(rooms: any) {
            this.rooms = rooms;
        }
    }
})