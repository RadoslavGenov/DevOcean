import axios, { AxiosInstance } from "axios";

export function GetAxiosInstance(): AxiosInstance {
    const axiosInstance = axios.create();
    axiosInstance.defaults.timeout = 1000 * 30; // 30 sec timeout
    return axiosInstance;
}
