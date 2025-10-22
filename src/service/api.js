import axios from "axios";

const api = axios.create({
  baseURL: "https://parkingapisenai.azurewebsites.net",
});

export default api;
