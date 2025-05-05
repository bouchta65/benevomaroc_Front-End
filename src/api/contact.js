import axios from 'axios';

const api = 'http://127.0.0.1:8000/api';

export default {
    sendMessage(data) {
        return axios.post(`${api}/contact`, data);
    },
};