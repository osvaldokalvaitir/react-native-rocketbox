import axios from "axios";

const api = axios.create({
  baseURL: "https://nodejs-rocketbox.herokuapp.com"
});

export default api;
