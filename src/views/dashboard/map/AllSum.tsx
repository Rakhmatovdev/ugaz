import { useQuery } from "@tanstack/react-query"
import uzbService from "../../../services/uzb.service"

const AllSum = () => {

  const {data:stations_by_region}=useQuery({
    queryKey:['stations by region'],
    queryFn:uzbService.stations_by_region,
})

function formater(number:number) {
  if (number >= 1e9) {
      let billion = number / 1e9;
      return billion.toFixed(2) + ' млрд. сум';
  } else {
      return new Intl.NumberFormat('ru-RU').format(Math.round(number)) + ' (м³)';
  }
}




  return (
    <div className="absolute top-4 right-4 w-[277px] z-[550] bg-white rounded-2xl border p-4">
<div className="flex flex-col justify-center items-center ">
    <p className="font-semibold text-2xl text-[#171429]">{stations_by_region?.operation_total?.total?<span>{formater(stations_by_region.operation_total.total)}</span>:(<span>100.3 млрд. сум</span>)}</p>
    <p className="text-2xl font-semibold"> {stations_by_region?.operation_total?.total_volume?<span>{formater(stations_by_region?.operation_total?.total_volume)}</span>:(<span>6 815 527 (м³)</span>)}</p>
    <p className="text-[#69757A] text-base">Общая сумма реализованного газа по Республике Узбекистан</p>
</div>
    </div>
  )
}

export default AllSum