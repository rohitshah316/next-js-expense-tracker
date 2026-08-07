"use client"

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({children}){
  return(
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar/>

      <div className="flex flex-1 flex-col">
        <Navbar/>
        <main className="flex flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}