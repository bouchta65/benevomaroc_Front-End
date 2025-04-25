import axios from 'axios';

const api = 'http://127.0.0.1:8000/api';

export default {
  getProfile(token) {
    return axios.get(`${api}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  updateUserInfo(data, token) {
    return axios.put(`${api}/profile/benevole/userInfo`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  },
  updateBenevoleDetails(data, token) {
    return axios.post(`${api}/profile/benevole/details`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },
  getTop3Opportunites(token) {
    return axios.get(`${api}/profile/benevole/top3Opportunites`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
}