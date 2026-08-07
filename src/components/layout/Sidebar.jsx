"use client"

import {
  LayoutDashboard,
  Receipt,
  PieChart,
  Wallet,
  Settings,

} from "lucide-react";

import { usePathname } from "next/navigation";
import Link from 'next/link'

const navItems=[
    {title:"Dashboard",
    href:"/dashboard",
    icon: LayoutDashboard
    },
      {
    title: "Expenses",
    href: "/dashboard/expenses",
    icon: Receipt,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: PieChart,
  },
  {
    title: "Budget",
    href: "/dashboard/budget",
    icon: Wallet,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]
export default function Sidebar(){

    const pathname=usePathname();
    return(
        <aside className="w-64 bg-slate-900 text-white flex flex-col">
            <div className="border-b border-slate-800 px-6 py-5">
                <h1 className="text-2xl font-bold">
                    Expense Tracker
                </h1>
            </div>


            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    {navItems.map((item)=>{
                        const Icon=item.icon;


                        const isActive=
                        pathname===item.href ||
                        (item.href!='/dashboard' && pathname.startsWith(item.href));

                            return(
                        <li key={item.href}>
                            <Link href={item.href}
                            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${isActive?'bg-blue-600 text-white':'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                            ><Icon size={20}/>
                            <span>{item.title}</span></Link>
                        </li>
                    )
                    })}


                
                </ul>
            </nav>
        </aside>
    )
}