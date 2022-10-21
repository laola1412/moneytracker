import FlowList from "./FlowList"

export default function Dashboard(props) {
   let sum = 0
   if(props.moneyList != null) {
    props.moneyList.forEach((x) => sum += x.flow)
   }

  return (
   <section className="container px-4 mx-auto text-gray-900">
      <div className="flex justify-between pt-24 pb-8 border-b">
         <h1 className="text-4xl font-bold">Dashboard</h1>
         <button onClick={props.addModalHandler} className="flex items-center h-10 px-4 space-x-2 font-medium text-white bg-orange-500 rounded-lg">
            <p className="text-medium">+</p>
            <p className="font-medium">Add</p>
         </button>
      </div>
      <div className="grid grid-cols-3 gap-6 pt-8">
         <div className="p-6 space-y-6 overflow-hidden border shadow-sm shadow-gray-200 rounded-xl">
            <h1 className="h-6 text-base font-medium">Total Net Worth</h1>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-20 space-y-4">
                  <p className="text-4xl font-semibold">€{sum}</p>
                  <p className="text-sm font-medium text-green-600">Up 10% vs last month</p>
               </div>
               <div className="h-20">
                  {/* graph */}
                  <p >Incididunt consequat dolore mollit elit nulla minim. Aliquip laboris</p>
               </div>
            </div>
         </div>
         <div className="p-6 space-y-6 overflow-hidden border shadow-sm shadow-gray-200 rounded-xl">
            <h1 className="h-6 text-base font-medium">Total Net Worth</h1>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-20 space-y-4">
                  <p className="text-4xl font-semibold">€{sum}</p>
                  <p className="text-sm font-medium text-green-600">Up 10% vs last month</p>
               </div>
               <div className="h-20">
                  {/* graph */}
                  <p >Incididunt consequat dolore mollit elit nulla minim. Aliquip laboris</p>
               </div>
            </div>
         </div>
         <div className="p-6 space-y-6 overflow-hidden border shadow-sm shadow-gray-200 rounded-xl">
            <h1 className="h-6 text-base font-medium">Total Net Worth</h1>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-20 space-y-4">
                  <p className="text-4xl font-semibold">€{sum}</p>
                  <p className="text-sm font-medium text-green-600">Up 10% vs last month</p>
               </div>
               <div className="h-20">
                  {/* graph */}
                  <p >Incididunt consequat dolore mollit elit nulla minim. Aliquip laboris</p>
               </div>
            </div>
         </div>
      </div>
      <FlowList flowList={props.moneyList} />
   </section>
  )
}
