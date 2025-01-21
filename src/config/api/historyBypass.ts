import axiosCli from "./config.ts";
import { endpoints } from "./edpoints.ts";


export const getHistoryBypass = async () => {
    const response = await axiosCli.get<IPhotoReport[]>(endpoints.historyBypass)

    return response.data
}

interface IPhotoReport {
    id: number,
    galleries: {
        id: number,
        file: string
    }[],
    category: {
        id: number,
        name: string
    },
    company: {
        id: number,
        name: string
    },
    date: string,
    district: number
}