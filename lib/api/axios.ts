import axios from "axios";
import { API_BASE_URL, DEFAULT_HEADERS } from "../config/env";

console.log(API_BASE_URL);
console.log("working");

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: DEFAULT_HEADERS,
  withCredentials: false,
});

api.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default api;
