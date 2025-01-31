import apiClient, { allService, endpoints, points } from "../config/axios";


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


    geo_jsonOne: async (id?:string) => {
        try {
if(!id) {
    const response = await apiClient.get(endpoints.geoJson);
    return response;
} else{
       const response = await apiClient.get(`${endpoints.geoJson}/${id}/`);
            return response;
}
        } catch (error) {
            console.error("geoJson one failed", error);
            throw new Error("geoJson one failed. Please check your credentials and try again.");
        }
    },

    regions: async () => {
        try {
            const response = await allService.get(points.regions);
            return response?.data;
        } catch (error) {
            console.error("regions failed", error);
            throw new Error("regions failed. Please check your credentials and try again.");
        }
    },

    sold_gas: async () => {
        const gas={start_date:"2025-01-01T00:00:00",end_date:'2025-01-29T00:00:00',status:1,period:'month',all:true}
        try {
            const response = await allService.get(points.sold_gas,{params:gas});
            return response?.data;
        } catch (error) {
            console.error("get chart failed", error);
            throw new Error("get chart failed. Please check your credentials and try again.");
        }
    },
    
    
        cars_statics: async () => {
            const gas={start_date:"2025-01-01T00:00:00",end_date:'2025-01-29T00:00:00',status:1}
            try {
                const response = await allService.get(points.cars_statics,{params:gas});
                return response?.data;
            } catch (error) {
                console.error("cars statics failed", error);
                throw new Error("cars statics failed. Please check your credentials and try again.");
            }
        },

    stations_by_region: async () => {
        const gas={start_date:"2025-01-01T00:00:00",end_date:'2025-01-29T00:00:00',is_digitalized:1,region_code:"",station_type_key:'agnkc'}
        try {
            const response = await allService.get(points.stations_by_region,{params:gas});
            return response?.data;
        } catch (error) {
            console.error("stations by region failed", error);
            throw new Error("stations by region failed. Please check your credentials and try again.");
        }
    },
    
    transaction_statistic: async (region_code?:string) => {
        const gas={date:"2025-01",region_code:region_code?region_code:"",date_type: "month"}
        try {
            const response = await allService.get(points.transaction_statistic,{params:gas});
            return response?.data;
        } catch (error) {
            console.error("transaction statistic failed", error);
            throw new Error("transaction statistic failed. Please check your credentials and try again.");
        }
    },

    fuel_dispensers: async () => {
        try {
            const response = await allService.get(points.fuel_dispensers);
            return response?.data;
        } catch (error) {
            console.error("fuel dispensers failed", error);
            throw new Error("fuel dispensers failed. Please check your credentials and try again.");
        }
    },








        contract_statistic_by_region: async () => {
            const gas={date:"2025-01",date_type: "month"}
            try {
                const response = await allService.get(points.contract_statistic_by_region,{params:gas});
                return response?.data;
            } catch (error) {
                console.error("statistic by region failed", error);
                throw new Error("statistic by region failed. Please check your credentials and try again.");
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
