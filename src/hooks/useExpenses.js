"use client"

import { useExpenseContext } from "@/context/ExpenseContext";

export default function useExpenses(){
    const {expenses,addExpense,updateExpense,deleteExpense,getExpense,isLoaded,budget,updateBudget,updateCategoryBudget,isBudgetLoaded}=useExpenseContext();


    return {expenses,addExpense,updateExpense,deleteExpense,getExpense,isLoaded,budget,updateBudget,updateCategoryBudget,isBudgetLoaded}
}