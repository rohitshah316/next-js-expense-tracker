

export default function Sidebar(){
    return(
        <aside className="w-64 bg-slate-900 text-white p-6">
            <h2 className="text-2xl font-bold mb-8">
                Dashboard
            </h2>

            <nav>
                <ul className="space-y-4">
                    <li className="hover:text-blue-400 cursor-pointer">
                        Dashboard
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                        Expenses
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                        Analytics
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                        Budget
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                        Settings
                    </li>
                </ul>
            </nav>
        </aside>
    )
}