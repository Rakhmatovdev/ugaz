import Cancel from '../../../../public/svg/Cancel';
import logoa from '../../../../public/svg/logoa.svg';
import logo from '../../../../public/logo.svg';
import useStations from '../../../config/hooks/useStation';
import { useMutation } from '@tanstack/react-query';
import uzbService from '../../../services/uzb.service';


const AlphaList = () => {
    const {alphaData,setAlphaDataOne,setAlphaOneShow,setAlphaShow} =useStations(data=>data)

    const {mutate:mutateAplha,data}=useMutation({
      mutationKey:['getAlphaData one'],
      mutationFn: uzbService.branchOne
    })
    


    const handleClick=(id:string| number)=>{
        mutateAplha(id) 
            setAlphaDataOne(data)
            setAlphaOneShow(true)   
    }


  return (
    <div>
      <div className="w-[470px] h-[571px] overflow-y-scroll custom-scrollbar rounded-2xl border absolute top-4 p-4  left-4 z-[550] bg-white">
        <div className="flex items-start  justify-between ">
          <div className="flex gap-x-4">
        <img src={logoa} width={60} height={60} alt={'logo'} />
        <div className="flex flex-col justify-between">
            <p className="font-semibold text-xl ">   Gas Stations</p>
            <div className="flex gap-2">
                <p className="text-[12px] px-3 py-[6px] border border-[#E9E9E9] rounded-full">АГНКС</p>
                <p className="text-[12px] px-3 py-[6px] border border-[#E9E9E9] rounded-full">АГЗС</p>
                <p className="text-[12px] px-3 py-[6px] border border-[#E9E9E9] rounded-full">АЗС</p>
                </div>
        </div>
            </div>
          <button className="text-[24px] font-semibold my-0 ">
            <Cancel width={20} height={20} strokeColor="#69757A" onClick={()=>setAlphaShow(false)}/>
          </button>
        </div>

      <div className="space-y-2 mt-4 "> {alphaData?.map((station:any)=>(<div key={station.id} className="flex items-center justify-between cursor-pointer  py-4 px-2 rounded-xl border border-[#E9E9E9]"  onClick={()=>handleClick(station.id)}> 
<p className='flex items-center gap-1'><img src={logo} alt="logo" />{station.name}</p>
<p>{station.status}</p> </div>))}</div>
 <div>
        </div>
      </div>
    </div>
  );
};

export default AlphaList;
