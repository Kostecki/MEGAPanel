import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.mega.re',
  auth: {
    username: process.env.REACT_APP_API_USER,
    password: process.env.REACT_APP_API_PASS
  }
});

export default Axios;