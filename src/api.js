import axios from 'axios';

const instance = axios.create({
  baseURL: ''
});

let axiosGet = (data) => {
  console.log("API isn't ready yet. Relax, dude!")
  /* instance.get(data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error)
    }) */
}

let axiosPost = (endpoint, data) => {
  console.log("API isn't ready yet. Relax, dude!")
  /* instance.post(endpoint, data, {})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error)
  }); */
};

export {axiosGet, axiosPost};