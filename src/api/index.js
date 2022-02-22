import axios from 'axios';

const BASE_URL = 'https://60e84194673e350017c21844.mockapi.io/api';
const environment = { BASE_URL };

const client = axios.create({
  baseURL: `${environment.BASE_URL}`,
});

client.interceptors.request.use(config => {
  //In case in the future we need to add header auth token

  return config;
});

client.interceptors.response.use(
  function (successRes) {
    return successRes;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default client;
