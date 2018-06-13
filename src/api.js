//import axios from 'axios';

/* const instance = axios.create({
  baseURL: ''
}); */

let axiosGet = (data) => {
  console.log("Posting...");
  console.log("API isn't done. Relax, man!");
  /* instance.get(data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error)
    }) */
}

let axiosPost = (endpoint, data) => {
  console.log("Posting...");
  console.log("API isn't done. Relax, man!");
  console.log(data);
  /* instance.post(endpoint, data, {})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error)
  }); */
};

export {axiosGet, axiosPost};