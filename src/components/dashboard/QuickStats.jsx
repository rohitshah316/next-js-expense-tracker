"use client"

import { getCategoryById } from '@/data/categories';
import {useMemo} from 'react';
import Card from "@/components/ui/Card";
import { formatCurrency } from "@/lib/formatCurrency";



export default function QuickStats({expenses}){
    const topCategory=useMemo(()=>{
        if(expenses.length===0) return null;

        const totals=expenses.reduce((acc,e)=>{
            acc[e.category]=(acc[e.category]|| 0)+Number(e.amount);
            return acc;
        },{});

        const [categoryId,amount]=Object.entries(totals).sort((a,b)=>b[1]-a[1])[0];

        return {category:getCategoryById(categoryId),amount}
    },[expenses])


    const averageExpense=useMemo(()=>{
        if(expenses.length===0) return 0;
        const total=expenses.reduce((sum,e)=>sum+Number(e.amount),0);
        return total/expenses.length;
    },[expenses])

    return(
        <Card>
      <h3 className="mb-4 font-semibold text-slate-800">Quick Stats</h3>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Top Category</span>
          <span className="font-medium text-slate-800">
            {topCategory ? topCategory.category.name : "-"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">Top Category Spend</span>
          <span className="font-medium text-slate-800">
            {topCategory ? formatCurrency(topCategory.amount) : "-"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">Average Expense</span>
          <span className="font-medium text-slate-800">
            {formatCurrency(averageExpense)}
          </span>
        </div>
      </div>
    </Card>
    )
}