import axios from 'axios';

const api = 'http://127.0.0.1:8000/api/dashboard';

export default {

    getAllAssociations(token, page = 1) {
        return axios.get(`${api}/admin/associations?page=${page}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      },

      getAssociationDetails(token, associationId) {
        return axios.get(`${api}/admin/associations/details/${associationId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      },

      updateAssociationStatus(token, associationId, statut) {
        return axios.put(`${api}/admin/associations/${associationId}/status`, 
          { statut },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );
      }


 


  

  }