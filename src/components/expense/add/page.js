"use client"

import Card from "@/components/ui/Card";
import useExpenses from "@/hooks/useExpenses";
import { Divide } from "lucide-react";
import { useRouter } from "next/navigation";
import ExpenseForm from "../ExpenseForm";


export default function AddExpensePage(){
    const router=useRouter();
    const {addExpense}=useExpenses();

    const handleSubmit=(expenseData)=>{
        addExpense({
            id:crypto.randomUUID(),
            ...expenseData,
        });
        router.push("/dashboard/expenses")
    }

    return(
        <div className="mx-auto max-w-2xl space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    Add Expense
                </h1>
                <p className="text-slate-500">Record a new expense</p>
            </div>

            <Card>
                <ExpenseForm onSubmit={handleSubmit} submitLabel="Add Expense"/>
            </Card>
        </div>
    )
}