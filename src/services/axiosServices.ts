import axios from "axios";

const axiosServices = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosServices.interceptors.response.use(
    (response) => response.data ?? response,
    (error) => Promise.reject(error)
);

export default axiosServices;
