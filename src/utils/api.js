import axios from 'axios';
import auth from '../utils/auth.js';

const Axios = axios.create({
  baseURL: 'https://megalight.azurewebsites.net',
  auth: {
    username: process.env.API_USER,
    password: process.env.API_PASS
  }
});

export default Axios;