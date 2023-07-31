import Axios from "axios";
import { BackendBaseUrl } from "./app";

export const api = Axios.create({
  baseURL: BackendBaseUrl,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});
