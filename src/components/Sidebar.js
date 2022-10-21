import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
   //sidebar toggler
   const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
   const openSidebarHandler = () => {
      setTimeout(() => {
         setSidebarIsOpen(true)
      }, 100);
   }
   const closeSidebarHandler = () => {
      setTimeout(() => {
         setSidebarIsOpen(false)
      }, 600);
   }

   //fill logo of active component
   // const [activePageLogo, setActivePageLogo] = useState(false)

  return (
   <>
      {sidebarIsOpen ?
         //opened drawer
         <aside onMouseEnter={openSidebarHandler} onMouseLeave={closeSidebarHandler} className={` bg-gray-300 h-full left-0 flex flex-col top-0 fixed text-gray-700 w-[15vw] px-2`}>
            <ul className="space-y-0.5 mt-10">
               <NavLink to="/" className={`flex hover:bg-gray-100 hover:cursor-pointer select-none h-10 items-center ${sidebarIsOpen ? "px-4 space-x-2 rounded-lg" : "rounded-full"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${sidebarIsOpen ? "" : "fixed"}`}>
                     <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  <p className={`${sidebarIsOpen ? "text-lg font-medium" : "hidden"}`}>Dashboard</p>
               </NavLink>
               <NavLink to="/saldolist" className={`flex hover:bg-gray-100 hover:cursor-pointer select-none h-10 items-center ${sidebarIsOpen ? "px-4 space-x-2 rounded-lg" : "rounded-full"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${sidebarIsOpen ? "" : "fixed"}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  <p className={`${sidebarIsOpen ? "text-lg font-medium" : "hidden"}`}>Income/Expenses</p>
               </NavLink>
               <NavLink to="/" className={`flex hover:bg-gray-100 hover:cursor-pointer select-none h-10 items-center ${sidebarIsOpen ? "px-4 space-x-2 rounded-lg" : "rounded-full"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${sidebarIsOpen ? "" : "fixed"}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <p className={`${sidebarIsOpen ? "text-lg font-medium" : "hidden"}`}>Analytics</p>
               </NavLink>
               <NavLink to="/settings" className={`flex hover:bg-gray-100 hover:cursor-pointer select-none h-10 items-center ${sidebarIsOpen ? "px-4 space-x-2 rounded-lg" : "rounded-full"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${sidebarIsOpen ? "" : "fixed"}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                  <p className={`${sidebarIsOpen ? "text-lg font-medium" : "hidden"}`}>Settings</p>
               </NavLink>
            </ul>
         </aside>
      :
         //closed Drawer
         <aside onMouseEnter={openSidebarHandler} onMouseLeave={closeSidebarHandler} className={` bg-gray-300 h-full left-0 flex flex-col top-0 fixed text-gray-700 px-6`}>
            <ul className="space-y-0.5 mt-10">
               <NavLink to="/" className={`flex hover:bg-gray-100 hover:cursor-pointer select-none h-10 items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6`}>
                     <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
               </NavLink>
               <NavLink to="/saldolist" className={`flex hover:bg-gray-100 hover:cursor-pointer select-none h-10 items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${sidebarIsOpen ? "" : "fixed"}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
               </NavLink>
               <NavLink to="/" className={`flex hover:bg-gray-100 hover:cursor-pointer select-none h-10 items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${sidebarIsOpen ? "" : "fixed"}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
               </NavLink>
               <NavLink to="/settings" className={`flex hover:bg-gray-100 hover:cursor-pointer select-none h-10 items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 ${sidebarIsOpen ? "" : "fixed"}`}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
               </NavLink>
            </ul>
         </aside>
      }
   </>   
  )
}
