import axios from 'axios';

const api = 'http://127.0.0.1:8000/api';

export default {


  registerBenevole(data) {
    return axios.post(`${api}/benevole`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  registerAssociation(data) {
    return axios.post(`${api}/association`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },


};
