import axios from "axios"
import { ACCESS_TOKEN } from "../contants/auth";
import { getCachedData } from "../utils/storage";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

axiosClient.interceptors.request.use(
  (config: any) => {
    const customHeaders: any = {}

    const accessToken = getCachedData(ACCESS_TOKEN)
    if (accessToken) {
      customHeaders.Authorization = `Bearer ${accessToken}`
    }
    if(config?.params?.signal) {
      config.signal = config.params.signal
      delete config.params.signal
    }
    return {
      ...config,
      headers: {
        ...customHeaders,
        ...config.headers,
      },
    };
  },
  function (error: any) {
    return Promise.reject(error);
  }
);


const checkRefreshToken = false

axios.interceptors.response.use(function (response) {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	return response;
}, function (error) {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	return Promise.reject(error);
});


export default axiosClient;