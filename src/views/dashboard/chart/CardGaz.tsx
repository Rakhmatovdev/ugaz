import HugeiconsMenu from "../../../../public/svg/HugeiconsMenu"
import Wrench from "../../../../public/svg/Wrench"
import Hugeicons from '../../../../public/svg/Hugeicons';
import Hugeiconsc from '../../../../public/svg/Hugeiconsc';
import AnalyticsIcon from '../../../../public/svg/Analytics';
import Checkmark from '../../../../public/svg/Checkmark';

const CardGaz = () => {


    const gazData = [
        {id:1,name:"Приход газа ",value:"1 239",badge:"suceess",color:'black'},
        {id:1,name:"Реализованный газ",value:"939",color:'black'},
        {id:1,name:"Дисбаланс",value:"300",color:'#3ABAAA'},
    ]

  return (
    <div className="pt-4">
        <p className="font-semibold text-2xl">Объем прихода и реализованного газа</p>

<div className="">
    <div className="flex gap-4 mt-4">
        {gazData.map((item) => (
            <div key={item.id} className="bg-[#E0F1F6] p-6 rounded-lg w-full">
                <p className="text-[#69757A]">{item.name}</p>
               <div className="flex items-center gap-2 font-semibold"> <p className="text-xl" style={{color:item.color}}>{item.value} m<span className="align-super text-xs">3</span> </p>
               {item.badge &&  <div className="flex items-center">
                    <div><Checkmark strokeColor="white" className="border-none"/> </div>
                </div>}
                </div>
            </div>
        ))}
    </div>
</div>
    </div>
  )
}

export default CardGaz