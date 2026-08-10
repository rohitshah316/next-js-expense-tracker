"use client"

import Card from "@/components/ui/Card";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import useExpenses from "@/hooks/useExpenses";
import { useParams, useRouter } from "next/navigation";
import ExpenseForm from "../../ExpenseForm";


export default function EditExpensePage(){
    const router=useRouter();
    const {id}=useParams();
    const {getExpense,updateExpense,isLoaded}=useExpenses();

    if(!isLoaded){
        return <LoadingSpinner/>
    }

    const expense=getExpense(id);

    if(!expense){
        return(
            <div className="text-center py-12">
                <p className="text-slate-500">Expense not found.</p>
            </div>
        )
    }


    const handleSubmit=(expenseData)=>{
        updateExpense({...expenseData,id:expense.id})
        router.push("/dashboard/expenses")
    }

    return(
        <div className="mx-auto max-w-2xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Edit Expense</h1>
                <p className="text-slate-500">Update your expense details</p>
            </div>

            <Card>
                <ExpenseForm
                initialValues={expense}
                onSubmit={handleSubmit}
                submitLabel="Update Expense"
                />
            </Card>
        </div>
    )

}