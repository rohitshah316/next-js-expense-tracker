import Navbar from "./Navbar";
import Sidebar from "./Sidebar";



export const DashboardLayout = ({children}) => {
  return (
    <div className="flex h-screen">
        <Sidebar/>
        <div className="flex flex-col flex-1">
            <Navbar/>
            <main className="flex-1 bg-slate-100 p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    </div>
  )
}
