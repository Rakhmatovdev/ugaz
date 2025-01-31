import Checkmark from '../../../../public/svg/Checkmark';
import useStations from '../../../config/hooks/useStation';

const CardGaz = () => {

    const {transaction_data}=useStations(data=>data)
    const gazData = [
        {id:1,name:"Общий баланс на начало месяца",value:transaction_data? new Intl.NumberFormat('ru-RU').format(Math.round(transaction_data[0]?.beginning_balance)):"1 239",badge:"suceess",color:'black'},
        {id:2,name:"Общий баланс на конец месяца",value:transaction_data?new Intl.NumberFormat('ru-RU').format(Math.round(transaction_data[0]?.latest_balance)):"939",color:'black'},
        {id:3,name:"Общие пополнения за месяц",value:transaction_data?new Intl.NumberFormat('ru-RU').format(Math.round(transaction_data[0]?.payment_amount)):"300",color:'#3ABAAA'},
    ]
 return (
    <div className="pt-4">
        <p className="font-semibold text-2xl">Объем прихода и реализованного газа</p>

<div className="">
    <div className="flex gap-4 mt-4">
        {gazData.map((item) => (
            <div key={item.id} className="bg-[#E0F1F6] p-6 rounded-lg w-full">
                <p className="text-[#69757A]">{item.name}</p>
               <div className="flex items-center gap-2 font-semibold"> <p className="text-xl" style={{color:item.color}}>{item.value} сум </p>
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