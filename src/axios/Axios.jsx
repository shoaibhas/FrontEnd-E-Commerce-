import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3304",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
});
// axiosInstance.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = token;
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//     console.log(axiosInstance);

//   }
// );
export default axiosInstance;
