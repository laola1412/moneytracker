import { useState } from "react"

export default function SaldoList(props) {
   const [hiddenStatus, setHiddenStatus] = useState(false);
   const addHidden = () => {
      setHiddenStatus(true)
   }
   const removeHidden = () => {
      setHiddenStatus(false)
   }

  return (
   <>
      <h1 className="pt-24 pb-8 text-4xl font-bold border-b">Income and Expenses</h1>
      <div className="py-2 space-y-2">
         {props.moneyList.map(x => (
            <div key={x.id} onMouseEnter={addHidden} onMouseLeave={removeHidden} className="flex items-center text-lg rounded-lg hover:cursor-default hover:bg-gray-100">
               <p className={`${x.flow < 0 ? "text-red-500" : "text-green-600"} px-6 py-4 font-medium basis-1/12`}>{x.flow}€</p>
               <p className="px-6 py-4 basis-3/12">{x.name}</p>
               <div className="flex px-6 py-4 space-x-2 basis-5/12">{x.categories.split(",").map(element => (<p className="px-2 py-0.5 text-sm text-blue-500 bg-blue-100 rounded-full">{element}</p>))}</div>
               {hiddenStatus &&
                  <div className="flex px-6 py-4 space-x-2 basis-3/12">
                     <button className="px-2 text-sm text-blue-500 bg-blue-100 rounded-full hover:bg-blue-200">Details</button>
                     <button className="px-2 text-sm text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200">Edit</button>
                     <button className="px-2 text-sm text-red-500 bg-red-100 rounded-full hover:bg-red-200">x</button>
                  </div>
               }
               
            </div>
         ))}
      </div>
   </>
  )
}
