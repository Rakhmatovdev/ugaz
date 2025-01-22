import { useState } from 'react';
import Hugeicons from '../../../../public/svg/Hugeicons';
import CheckIcon from '../../../../public/svg/Check';

const FilterA = () => {
    const [aghkcCheck, setAghkcCheck] = useState(true)
    const [agzcCheck, setAgzcCheck] = useState(false)
    const [azcCheck, setAzcCheck] = useState(false)
    const [digitized, setDigitized] = useState(true)
    const [nDigitized, setNdigitized] = useState(true)

  return (<div className=''>
    <div className=" absolute top-[534px] z-[400] left-[450px]">
<div className="flex items-center gap-3">
<div className="flex gap-6 px-4 py-3 bg-white rounded-full  bg-opacity-95 ">
 <div className="flex items-center">
    <input type="checkbox" id="aghkc" className="hidden" onClick={()=>setAghkcCheck(prev=>!prev)}/>
    <label htmlFor="aghkc" className="flex items-center   gap-2  cursor-pointer">
       { aghkcCheck?<CheckIcon className='mr-1' size={20} backgroundColor='#5B9DFF'/>:<Hugeicons  fillColor='#5B9DFF' />}
      <span className="mr-2 text-sm">АГНКС</span>
      <span className="text-sm py-1 px-[6px] border border-[#E9E9E9] rounded-[14px] font-medium">120</span>
    </label>
  </div>

  <div className="flex items-center">
    <input type="checkbox" id="agzc" className="hidden" onClick={()=>setAgzcCheck(prev=>!prev)}/>
    <label htmlFor="agzc" className="flex items-center  gap-2  cursor-pointer">
    { agzcCheck?<CheckIcon  className='mr-1' size={20} backgroundColor='#9747FF'/>:<Hugeicons  fillColor='#9747FF' />}
      <span className="mr-2 text-sm ">АГЗС</span>
      <span className="text-sm py-1 px-[8px] border border-[#E9E9E9] rounded-[14px] font-medium">90</span>
    </label>
  </div>

  <div className="flex items-center">
    <input type="checkbox" id="azc" className="hidden transition-all duration-300 " onClick={()=>setAzcCheck(prev=>!prev)}/>
    <label htmlFor="azc" className="flex items-center   gap-2 cursor-pointer">
    { azcCheck?<CheckIcon className='mr-1' size={20} backgroundColor='#FFA500'/>:<Hugeicons  fillColor='#FFA500' />}
    <span className="mr-2 text-sm">АЗС</span>
      <span className="text-sm py-1 px-[8px] border border-[#E9E9E9] rounded-[14px] font-medium">68</span>
    </label>
  </div>
 </div>
 <div className="flex gap-6 px-4 py-3 bg-white rounded-full">

 <div className="flex items-center">
    <input type="checkbox" id="digitized" className="hidden" onClick={()=>setDigitized(prev=>!prev)}/>
    <label htmlFor="digitized" className="flex items-center   gap-2  cursor-pointer">
       { digitized?<CheckIcon className='mr-1' size={20} backgroundColor='#3ABAAA'/>:<Hugeicons  fillColor='#3ABAAA' />}
      <span className="mr-2 text-sm">Оцифровано</span>
      <span className="text-sm py-[3px] px-[8px] border border-[#E9E9E9] rounded-[14px] font-medium">80</span>
    </label>
  </div>

  <div className="flex items-center">
    <input type="checkbox" id="nDigitized" className="hidden" onClick={()=>setNdigitized(prev=>!prev)}/>
    <label htmlFor="nDigitized" className="flex items-center  gap-2  cursor-pointer">
    { nDigitized?<CheckIcon  className='mr-1' size={20} backgroundColor='#FF4E4E'/>:<Hugeicons  fillColor='#FF4E4E' />}
      <span className="mr-2 text-sm ">Не оцифровано</span>
      <span className="text-sm py-[3px] px-[8px] border border-[#E9E9E9] rounded-[14px] font-medium">40</span>
    </label>
  </div>
</div>
</div>
</div>


 </div> )
}

export default FilterA