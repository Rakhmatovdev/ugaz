import axios from "axios";
import apiClient, { endpoints } from "../config/axios";
import { TChart } from "../utils/types";

export const uzbService = {

    geo_json: async () => {
        try {
            const response = await apiClient.get(endpoints.geoJson);
            return response;
        } catch (error) {
            console.error("geoJson failed", error);
            throw new Error("geoJson failed. Please check your credentials and try again.");
        }
    },

    geo_jsonOne: async ({id}:{id:string}) => {
        try {
            const response = await apiClient.get(`${endpoints.geoJson}/${id}/`);
            return response;
        } catch (error) {
            console.error("geoJson one failed", error);
            throw new Error("geoJson one failed. Please check your credentials and try again.");
        }
    },

    get_chart: async (data:TChart) => {
        try {
            const response = await axios.get<TChart>(`http://api.my-agnks-dev.xdevs.uz/api/v1/admin-statistics/stations/gas-statistics/receive_sold_gas/`,{data});
            return response;
        } catch (error) {
            console.error("geoJson one failed", error);
            throw new Error("geoJson one failed. Please check your credentials and try again.");
        }
    },




};

export default uzbService;
