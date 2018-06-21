import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://megalight.azurewebsites.net',
  auth: {
    username: process.env.REACT_APP_API_USER,
    password: process.env.REACT_APP_API_PASS
  }
});

export default Axios;