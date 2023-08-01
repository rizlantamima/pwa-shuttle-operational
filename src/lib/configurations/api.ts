import Axios, { InternalAxiosRequestConfig } from "axios";
import { BackendBaseUrl } from "./app";

const getToken = () => {
  return localStorage.getItem("token");
};

export const api = Axios.create({
  baseURL: BackendBaseUrl,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally, you can also add a response interceptor to handle token refresh or other token-related tasks.
api.interceptors.response.use(
  (response) => {
    // You can perform actions with the response here
    return response;
  },
  (error) => {
    // You can handle errors here
    return Promise.reject(error);
  }
);
