import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://megalight.azurewebsites.net'
  //baseURL: 'https://api.mega.re'
});

export default Axios;