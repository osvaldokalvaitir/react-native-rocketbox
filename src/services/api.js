import axios from "axios";

const api = axios.create({
  baseURL: "https://node-rocketbox.herokuapp.com"
});

export default api;
