"use client";

import {createContext,useContext} from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { STORAGE_KEYS } from '@/lib/constants';

const ExpenseContext=createContext(null);

const defaultBudget={
    monthly:0,
    categories:{},
}

export function ExpenseProvider({children}){
    const [expenses,setExpenses,isLoaded]=useLocalStorage(STORAGE_KEYS.EXPENSES,[]);
    const [budget,setBudget,isBudgetLoaded]=useLocalStorage(STORAGE_KEYS.BUDGET,defaultBudget)

    const addExpense=(expense)=>{
        setExpenses((currentExpenses)=>[...currentExpenses,expense,]);
    }

    const updateExpense=(updatedExpense)=>{
        setExpenses((currentExpenses)=>
        currentExpenses.map((expense)=>
            expense.id===updatedExpense.id?updatedExpense:expense
        ))
    }


    const deleteExpense=(expenseId)=>{
        setExpenses((currentExpenses)=>
        currentExpenses.filter((expense)=>
        expense.id!==expenseId
        ))
    }


    const getExpense=(expenseId)=>{
        return expenses.find((expense)=>
        expense.id===expenseId
        )
    }

    const updateBudget=(updates)=>{
        setBudget((current)=>({...current,...updates}));
    }

    const updateCategoryBudget=(categoryId,amount)=>{
        setBudget((current)=>({
            ...current,
            categories:{...current.categories,[categoryId]:amount}
        }))
    }


    return(
        <ExpenseContext.Provider value={{expenses,addExpense,deleteExpense,updateExpense,getExpense,isLoaded,budget,updateBudget,updateCategoryBudget,isBudgetLoaded}}>

            {children}
        </ExpenseContext.Provider>
    )
}



export function useExpenseContext(){
    const context=useContext(ExpenseContext);

    if(!context){
        throw new Error("useExpenseContext must be used inside ExpenseProvider")

        
    }
    return context;
}