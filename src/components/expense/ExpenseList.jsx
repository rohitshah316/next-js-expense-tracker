"use client"

import EmptyState from "../ui/EmptyState";
import LoadingSpinner from "../ui/LoadingSpinner";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({expenses,isLoaded,onDelete}){
    if(!isLoaded){
        return <LoadingSpinner/>
    }

    if(expenses.length===0){
        return(
            <EmptyState
            title="No expenses yet"
            description="Start trackng by adding your first expense"
            actionLabel="Add Expense"
            actionHref="/dashboard/expenses/add"
            />
        )
    }

    return(
        <div className="space-y-3">
            {expenses.map((expense)=>(
                <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete}/>
            ))}
        </div>
    )
}