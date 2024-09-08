import axios from "axios";

const baseApi = `http://localhost:8081/hotelmaster/room`;

const roomApi = {
    getAllRoom: async () => {
        axios({
            method: 'get',
            url: 'http://localhost:8081/hotelmaster/room',
            responseType: 'stream'
          })
            .then(function (response) {
                console.log('response', response)
            });
        // const data = await axios.get('http://localhost:8081/hotelmaster/room');
        // console.log("data",data)
        // return data;
    },

    getOneRoom: async (id: string) => {
        const data = await axios.get(`${baseApi}/${id}`);
        return data;
    }
}

export default roomApi;