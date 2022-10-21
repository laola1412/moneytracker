import { useState } from "react"

export default function SaldoList() {
  return (
   <section className="container px-4 mx-auto text-gray-800">
      <h1 className="pt-12 pt-24 pb-8 text-4xl font-bold border-b">Settings</h1>
      <div className="grid grid-cols-4 gap-4 pt-8">
         <aside className="col-span-1 flex flex-col h-full space-y-0.5 basis-3/12">
            <p className="px-3 py-2 font-medium text-gray-600 rounded-lg hover:cursor-pointer hover:bg-gray-100">Profile</p>
            <p className="px-3 py-2 font-medium text-gray-600 rounded-lg hover:cursor-pointer hover:bg-gray-100">Password</p>
            <p className="px-3 py-2 font-medium text-gray-600 rounded-lg hover:cursor-pointer hover:bg-gray-100">Email</p>
            <p className="px-3 py-2 font-medium text-gray-600 rounded-lg hover:cursor-pointer hover:bg-gray-100">Theme</p>
            <p className="px-3 py-2 font-medium text-gray-600 rounded-lg hover:cursor-pointer hover:bg-gray-100">Updates</p>
         </aside>
         <main className="col-span-3">
            <h1>heading</h1>
            <p>test123</p>
         </main>
      </div>
   </section>
  )
}