import apiClient, { endpoints } from "../config/axios";





export const uzbService = {

    uzbekistan_borders: async () => {
        try {
            const response = await apiClient.get(endpoints.uzbekistan_borders);
            return response;
        } catch (error) {
            console.error("uzbekistan_borders failed", error);
            throw new Error("uzbekistan_borders failed. Please check your credentials and try again.");
        }
    },

    geo_json: async () => {
        try {
            const response = await apiClient.get(endpoints.geoJson);
            return response;
        } catch (error) {
            console.error("geoJson failed", error);
            throw new Error("geoJson failed. Please check your credentials and try again.");
        }
    },


    
};

export default uzbService;
