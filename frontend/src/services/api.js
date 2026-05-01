import axios from "axios";

const API = axios.create({
  baseURL: "https://genuine-connection-production-df0f.up.railway.app/api",
});

export default API;