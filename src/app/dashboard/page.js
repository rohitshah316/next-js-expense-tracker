"use client"

import useExpenses from "@/hooks/useExpenses";

export default function DashboardPage() {

    const {expenses, addExpense,deleteExpense,isLoaded}=useExpenses();

    const handleTestExpense=()=>{
        addExpense({
            id:crypto.randomUUID(),
            title:"test expense",
            amount: 25,
            category:"Food",
            date:new Date().toISOString().split("T")[0],
            description:"testing expense state"
        })
    }

    if(!isLoaded){
        return <p>Loading...</p>
    }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <button 
      onClick={handleTestExpense}
      className="rounded-lg bg-blue-600 px-4 py-2 text-white">Add Test Expense</button>

      <div className="space-y-3">
        {expenses.map((expense)=>(
           <div
            key={expense.id}
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
          >
            <div>
              <p className="font-semibold">
                {expense.title}
              </p>

              <p className="text-sm text-slate-500">
                {expense.category}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold">
                ${expense.amount}
              </span>

              <button
                onClick={() => deleteExpense(expense.id)}
                className="text-red-600 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}