import apiClient, { allService, endpoints, points } from "../config/axios";
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

    sold_gas: async () => {
        const gas={start_date:"2025-01-01T00:00:00",end_date:"2025-01-29T10:25:49",status:1,period:'month',all:true}
        try {
            const response = await allService.get<TChart>(points.sold_gas,{params:gas});
            return response?.data;
        } catch (error) {
            console.error("get chart failed", error);
            throw new Error("get chart failed. Please check your credentials and try again.");
        }
    },

    station_detail: async () => {
        try {
            const response = await allService.get(points.station_detail);
            return response?.data;
        } catch (error) {
            console.error("station detail failed", error);
            throw new Error("station detail failed. Please check your credentials and try again.");
        }
    },

    dispensers_detail: async () => {
        try {
            const response = await allService.get(points.dispensers_detail);
            return response?.data;
        } catch (error) {
            console.error("dispensers detail failed", error);
            throw new Error("dispensers detail failed. Please check your credentials and try again.");
        }
    },

    cars_statics: async () => {
        try {
            const response = await allService.get(points.cars_statics);
            return response?.data;
        } catch (error) {
            console.error("cars statics failed", error);
            throw new Error("cars statics failed. Please check your credentials and try again.");
        }
    },

    dispensers_list: async () => {
        try {
            const response = await allService.get(points.dispensers_list);
            return response?.data;
        } catch (error) {
            console.error("dispensers list failed", error);
            throw new Error("dispensers list failed. Please check your credentials and try again.");
        }
    },



};

export default uzbService;
