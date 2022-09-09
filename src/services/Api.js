import axios from "axios";

const token = localStorage.getItem("token");

axios.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.defaults.headers.common.access_token = token;

const Api = axios.create({
  baseURL: "https://bootcamp-rent-car.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  mode: "no-cors",
  credentials: true,
  crossdomain: true,
});

export default Api;
