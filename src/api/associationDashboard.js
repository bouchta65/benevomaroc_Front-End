import axios from 'axios';

const api = 'http://127.0.0.1:8000/api/dashboard';

export default {

getOpportunitesOfAssociation(token){
    return axios.get(`${api}/Myopportunites` , {
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
  },


  updateOpportunite(token, id, data) {
    return axios.post(`${api}/opportunite/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  }, 




  }