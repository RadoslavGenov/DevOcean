import { AxiosResponse } from "axios";
import { SERVICE_ENDPOINTS } from "../constants/Enums";
import { GetAxiosInstance } from "../tools/axios/axios-instance";

export function ApiService(): Promise<AxiosResponse<any>> {
    return GetAxiosInstance().get(SERVICE_ENDPOINTS.SOLUTION);
}
