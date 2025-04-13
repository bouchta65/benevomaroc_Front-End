import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api/opportunites'; 

export default {
  getAll() {
    return axios.get(`${API_BASE}`);
  },

  getTop3() {
    return axios.get(`${API_BASE}`);
  },
  
};
