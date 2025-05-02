import axios from 'axios';

const api = 'http://127.0.0.1:8000/api';

export default {

        getBenevoleStatistics(token){
            return axios.get(`${api}/benevole/Statistics`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
        });
        },
        getAssociationStatistics(token){
            return axios.get(`${api}/opportunitess/Statistics`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
        });
        }
}