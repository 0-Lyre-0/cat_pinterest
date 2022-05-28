import axios from 'axios';
import {BASE_URL} from "./constants/apiUrls";

const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Api-Key": process.env.API_KEY || false
  }
});

export default axiosApi;
