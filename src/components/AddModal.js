import ReactDOM from "react-dom"

export default function AddModal(props){
   const submitHandler = (e) => { e.preventDefault() }


   const Modal =
      <aside className=" duration-300 fixed z-50 top-[15%] inset-x-0 p-6 w-[480px] rounded-xl mx-auto bg-white space-y-5">
         {/* TODO: svg icon */}
         {/* Modal title and subtitle */}
         <div className="space-y-2">
            <h2 className="text-lg font-semibold">Add Income or Expense</h2>
            <p className="text-sm text-gray-500">Will be added to your income/expense data.</p>
         </div>
         {/* Input Area */}
         <form onSubmit={submitHandler} className="space-y-8">
            <div className="space-y-4">
               <div className="flex flex-col space-y-1.5">
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <input onChange={props.modalNameHandler} value={props.modalName} className={`rounded-lg border px-3.5 py-2.5`} type="text" placeholder="Netflix" />
               </div>
               <div className="flex flex-col space-y-1.5">
                  <label className="text-sm font-medium text-gray-500">Categories</label>
                  <input onChange={props.modalCategoriesHandler} value={props.modalCategories} className="rounded-lg border px-3.5 py-2.5" type="text" placeholder="Comma separated (e.g. entertainment, abonnement, ...)" />
               </div>
               <div className="flex flex-col space-y-1.5">
                  <label className="text-sm font-medium text-gray-500">Amount</label>
                  <input onChange={props.modalAmountHandler} value={props.modalAmount} className="rounded-lg border px-3.5 py-2.5" type="number" min="0.01" step="0.01" placeholder="10.90" />
               </div>
               <div className="flex flex-col space-y-1.5">
                  <label className="text-sm font-medium text-gray-500">Notes</label>
                  <input className="rounded-lg border px-3.5 py-2.5" type="text" placeholder="Wanted to see if ... was interesting" />
               </div>
            </div>
            {/* Submit/Cancel button */}
            <div className="flex space-x-3">
               <button onClick={props.removeModalHandler} className="basis-1/2 text-md shadow font-semibold text-gray-600 px-4.5 py-2.5 border rounded-lg">Cancel</button>
               {/* TODO:change color according to form validity */}
               <button onClick={props.checkInputValidity} type="submit" className={`${props.modalCanFinish ? "bg-blue-600" : "bg-red-500"} basis-1/2 text-md shadow font-semibold text-white px-4.5 py-2.5 border rounded-lg`}>Add</button>
            </div>
            
            {/* Modal cant finish error -> more inputs are required */}
            {props.modalCanFinish ? null : <div className="font-semibold text-md text-center px-4.5 py-2.5 rounded-lg bg-red-200 text-red-500">More inputs are required!</div>}
         </form>
      </aside>

  return ReactDOM.createPortal(Modal, document.getElementById("modal-hook"))
}