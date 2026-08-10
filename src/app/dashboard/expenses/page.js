"use client"

import ExpenseFilters from "@/components/expense/ExpenseFilters";
import ExpenseList from "@/components/expense/ExpenseList";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import useExpenses from "@/hooks/useExpenses";
import Link from "next/link";
import {useMemo,useState} from 'react'


const emptyFilters={
    search:"",
    category:"",
    startDate:"",
    endDate:""
}
export default function ExpensesPage(){
    const {expenses,deleteExpense,isLoaded}=useExpenses();
    const [filters,setFilters]=useState(emptyFilters);
    const [deleteTarget,setDeleteTarget]=useState(null);

    const confirmDelete=()=>{
        deleteExpense(deleteTarget);
        setDeleteTarget(null);
    }

    const filteredExpenses=useMemo(()=>{
        return expenses.filter((expense)=>{
            const matchesSearch=expense.title
            .toLowerCase()
            .includes(filters.search.toLowerCase());

            const matchesCategory=
            !filters.category||expense.category===filters.category;

            const matchesStart=
            !filters.startDate|| expense.date>=filters.startDate;

            const matchesEnd=
            !filters.endDate|| expense.date<=filters.endDate;

            return matchesSearch && matchesCategory && matchesStart && matchesEnd;

        })
        .sort((a,b)=>new Date(b.date)-new Date(a.date));
    },[expenses,filters])

    const handleDelete=(expenseId)=>{
        if(confirm("Delete this expense?")){
            deleteExpense(expenseId)
        }
    }
    return(
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Expenses</h1>
                    <p className="text-slate-500">{filteredExpenses.length} of {expenses.length} expenses</p>
                </div>

                <Link href={`/dashboard/expenses/add`}><Button>Add Expense</Button></Link>
            </div>
        <ExpenseFilters
        filters={filters}
        onChange={setFilters}
        onReset={()=>setFilters(emptyFilters)}
        />
            <ExpenseList 
            expenses={filteredExpenses}
            isLoaded={isLoaded}
            onDelete={setDeleteTarget}
            />

            <Modal
            isOpen={!!deleteTarget}
            onClose={()=>setDeleteTarget(null)}
            title="Delete Expense"
            >
                <p className="text-slate-600 mb-6">Are you sure you want to delete this expense? This cannot be undone.</p>
                <div className="flex justify-end gap-3">
                    <Button variant="secondary" onClick={()=>setDeleteTarget(null)}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                </div>
            </Modal>
        </div>
    )
}