

export default function Navbar(){
    return(
        <header className="h-16  bg-white border-b border-y-gray-200 flex items-center justify-between px-6">
            <h1 className="text-xl font-bold text-slate-800">Expense Tracker</h1>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Add Expense</button>
        </header>
    )
}