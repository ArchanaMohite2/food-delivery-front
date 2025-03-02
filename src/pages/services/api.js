import axios from "axios";

const API = axios.create({
  baseURL: "https://your-api-url.com", // इथे तुझ्या backend ची URL दे
  headers: { "Content-Type": "application/json" },
});

export default API;