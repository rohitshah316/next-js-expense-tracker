"use client"

import { getCategoryById } from "@/data/categories";
import { formatCurrency } from "@/lib/formatCurrency";
import {useMemo} from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


export default function ExpensePieChart({expenses}){
    const data=useMemo(()=>{

        const totals=expenses.reduce((acc,e)=>{
            acc[e.category]=(acc[e.category]||0)+Number(e.amount);

            return acc
        },{});

        return Object.entries(totals)
        .map(([categoryId,value])=>{
            const category=getCategoryById(categoryId);
            return {name:category.name, value,color: category.color}
        })
        .sort((a,b)=>b.value=a.value)

    },[expenses]);

    if(data.length===0){
        return(
            <div className="flex h-64 items-center justify-center text-sm text-slate-400">
                No data to display
            </div>
        )
    }


    return(
        <ResponsiveContainer width="100%" height={280}>
            <PieChart>
                <Pie
                 data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={2}
                >
                    {data.map((entry,index)=>(
                        <Cell key={index} fill={entry.color}/>
                    ))}
                </Pie>
                <Tooltip formatter={(value)=>formatCurrency(value)}/>
                <Legend/>
                
            </PieChart>
        </ResponsiveContainer>
    )
}