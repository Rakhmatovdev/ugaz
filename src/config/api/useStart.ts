import axiosCli from "./config";
import { useQuery, QueryKey } from "@tanstack/react-query";

interface IParams {
  region?: string; 
  district?: string;
  type_date?: string; 
}

const reportsService = {
  getReports: async (params: IParams) => {
    const { type_date, region, district } = params;

    const queryString = new URLSearchParams({
      ...(type_date && { type_date }),
      ...(region && { region }),
      ...(district && { district }),
    }).toString();

    return axiosCli.get(`/v1/stats/reports/get_stats/?${queryString}`);
  },
};

export const useReportsQuery = (params: IParams) => {
  return useQuery({
    queryKey: ["reports", params] as QueryKey,
    queryFn: () => reportsService.getReports(params),
  });
};
