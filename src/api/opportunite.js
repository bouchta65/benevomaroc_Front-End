import axios from 'axios';

const API = 'http://127.0.0.1:8000/api/opportunites'; 

export default {
  getAll(page = 1) {
    return axios.get(`${API}?page=${page}`);
  },

  getTop3() {
    return axios.get(`${API}/Top`);
},

  getById(id) {
    return axios.get(`${API}/${id}`);
  },

  searchOpportunites(ville, titre, types = [], sort) {
    const params = { ville, titre, types, sort };
    return axios.get(`${API}/search`, { params });
  },

  getSimilarOpportunites(id) {
    return axios.get(`${API}/${id}/similar`);
  },

  
  




  
};

