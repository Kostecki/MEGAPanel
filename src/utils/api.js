import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://megalight.azurewebsites.net',
  auth: {
    username: 'mega',
    password: 'boominator'
  }
});

export default Axios;