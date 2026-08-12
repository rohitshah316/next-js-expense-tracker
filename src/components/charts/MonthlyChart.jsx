"use client"

import {useMemo} from "react";
import { BarChart, CartesianGrid, ResponsiveContainer ,XAxis,YAxis,Tooltip,Bar} from "recharts";
import { formatCurrency } from "@/lib/formatCurrency";

export default function MonthlyChart({expenses,monthsToShow=6}){
    const data=useMemo(()=>{
        const now=new Date();
        const months=[];

        for(let i=monthsToShow-1;i>=0;i--){
            const d=new Date(now.getFullYear(),now.getMonth()-1,1);
            months.push({
                key:`${d.getFullYear()}-${d.getMonth()}`,
                label: d.toLocaleDateString("en-US",{month:"short"}),
                total:0,
            })

            expenses.forEach((e)=>{
                const d=new Date(e.date);
                const key=`${d.getFullYear()}-${d.getMonth()}`;
                const month=months.find((m)=>m.key===key);
                if(month) month.toal+=Number(e.amount);
            });

            return months;
        }
    },[expenses,monthsToShow]);

    return(
        <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="e2e8f0"/>
                 <XAxis dataKey="label" stroke="#64748b" fontSize={12} />
        <YAxis stroke="#64748b" fontSize={12} />
        <Tooltip formatter={(value) => formatCurrency(value)} />
        <Bar dataKey="total" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}