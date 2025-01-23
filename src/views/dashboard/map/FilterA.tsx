import Hugeicons from '../../../../public/svg/Hugeicons';
import CheckIcon from '../../../../public/svg/Check';
import useCheckboxStore from '../../../config/hooks/useCheckboxStore';

const FilterA = () => {
    const {aghkcCheck,agzcCheck,azcCheck,toggleAghkcCheck,toggleAgzcCheck,toggleAzcCheck,toggleDigitized,toggleNDigitized,digitized,nDigitized}=useCheckboxStore()

  return (<div className=''>
    <div className=" absolute top-[534px] z-[400] right-[20px]">
<div className="flex items-center flex-row-reverse gap-3">
<div className="flex gap-6 px-4 py-3 bg-white rounded-full  bg-opacity-95 ">
 <div className="flex items-center">
    <input type="checkbox" id="aghkc" className="hidden" onClick={toggleAghkcCheck}/>
    <label htmlFor="aghkc" className="flex items-center   gap-2  cursor-pointer">
       { aghkcCheck?<CheckIcon className='mr-1' size={20} backgroundColor='#5B9DFF'/>:<Hugeicons  fillColor='#5B9DFF' />}
      <span className="mr-2 text-sm">АГНКС</span>
      <span className="text-sm py-1 px-[6px] border border-[#E9E9E9] rounded-[14px] font-medium">120</span>
    </label>
  </div>

  <div className="flex items-center">
    <input type="checkbox" id="agzc" className="hidden" onClick={toggleAgzcCheck}/>
    <label htmlFor="agzc" className="flex items-center  gap-2  cursor-pointer">
    { agzcCheck?<CheckIcon  className='mr-1' size={20} backgroundColor='#9747FF'/>:<Hugeicons  fillColor='#9747FF' />}
      <span className="mr-2 text-sm ">АГЗС</span>
      <span className="text-sm py-1 px-[8px] border border-[#E9E9E9] rounded-[14px] font-medium">90</span>
    </label>
  </div>

  <div className="flex items-center">
    <input type="checkbox" id="azc" className="hidden transition-all duration-300 " onClick={toggleAzcCheck}/>
    <label htmlFor="azc" className="flex items-center   gap-2 cursor-pointer">
    { azcCheck?<CheckIcon className='mr-1' size={20} backgroundColor='#FFA500'/>:<Hugeicons  fillColor='#FFA500' />}
    <span className="mr-2 text-sm">АЗС</span>
      <span className="text-sm py-1 px-[8px] border border-[#E9E9E9] rounded-[14px] font-medium">68</span>
    </label>
  </div>
 </div>
 <div className={`flex gap-6 px-4 py-3 bg-white rounded-full ${agzcCheck || azcCheck ? 'opacity-50 cursor-not-allowed':""}`} >

 <div className="flex items-center">
    <input type="checkbox" id="digitized" className="hidden" onClick={toggleDigitized} disabled={agzcCheck || azcCheck}/>
    <label htmlFor="digitized" className={`flex items-center   gap-2  cursor-pointer ${agzcCheck || azcCheck ? 'cursor-not-allowed py-[3px]' :""}`}>
       { digitized?<CheckIcon className='mr-1' size={20} backgroundColor='#3ABAAA'/>:<Hugeicons  fillColor='#3ABAAA' />}
      <span className="mr-2 text-sm">Оцифровано</span>
      {(!agzcCheck  && !azcCheck) && <span className="text-sm py-[3px] px-[8px] border border-[#E9E9E9] rounded-[14px] font-medium">80</span>}
    </label>
  </div>

  <div className="flex items-center">
    <input type="checkbox" id="nDigitized" className="hidden" onClick={toggleNDigitized} disabled={agzcCheck || azcCheck}/>
    <label htmlFor="nDigitized" className={`flex items-center   gap-2  cursor-pointer ${agzcCheck || azcCheck ? 'cursor-not-allowed':""}`}>
    { nDigitized?<CheckIcon  className='mr-1' size={20} backgroundColor='#FF4E4E'/>:<Hugeicons  fillColor='#FF4E4E' />}
      <span className="mr-2 text-sm ">Не оцифровано</span>
      {(!agzcCheck  && !azcCheck) && <span className="text-sm py-[3px] px-[8px] border border-[#E9E9E9] rounded-[14px] font-medium">40</span>}
    </label>
  </div>
</div>
</div>
</div>


 </div> )
}

export default FilterA