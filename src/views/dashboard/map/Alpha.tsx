import Cancel from '../../../../public/svg/Cancel';
import NavigationTabs from "./NavigationBar";

const Alpha = () => {
  return (
    <div>
      <div className="w-[465px] h-[571px] overflow-y-scroll custom-scrollbar rounded-2xl border absolute top-4 p-4  left-4 z-[550] bg-white">
        <div className="flex items-start  justify-between ">
          <div className="flex gap-x-4">
        <img src={'/public/svg/logoa.svg'} width={60} height={60} alt={'logo'} />
        <div className="flex flex-col justify-between">
            <p className="font-semibold text-xl ">Alpha Gas</p>
            <div className="flex gap-2">
                <p className="text-[12px] px-3 py-[6px] border border-[#E9E9E9] rounded-full">АГНКС</p>
                <p className="text-[12px]  px-3 py-[6px] border border-[#E9E9E9] rounded-full">Последняя активность: 22/11/2024 11:19</p>
            </div>
        </div>
            </div>
          <button className="text-[24px] font-semibold my-0 ">
            <Cancel width={20} height={20} strokeColor="#69757A"/>
          </button>
        </div>
       
    <button className="w-full bg-[#3ABAAA] text-white font-semibold py-[14px] text-sm  rounded-xl my-4">
    Посмотреть отчеты
    </button>
 <div>
          <NavigationTabs/>
        </div>
      </div>
    </div>
  );
};

export default Alpha;
