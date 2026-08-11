"use client"

import {useMemo} from 'react';
import SummaryCard from './SummaryCard';
import { formatCurrency } from '@/lib/formatCurrency';
import { Calendar, Receipt, TrendingUp, Wallet } from 'lucide-react';



export default function SummaryCards({expenses}){
    const stats=useMemo(()=>{
        const now=new Date();
        const currentMonth=now.getMonth();
        const currentYear=now.getFullYear();

        const thisMonthExpenses=expenses.filter((e)=>{
            const d=new Date(e.date);
            return d.getMonth()===currentMonth && d.getFullYear()===currentYear;
        });

        const lastMonthDate=new Date(currentYear,currentMonth-1);
        const lastMonthExpenses=expenses.filter((e)=>{
            const d=new Date(e.date);
            return(
                d.getMonth()===lastMonthDate.getMonth() && d.getFullYear()===lastMonthDate.getFullYear()
            )
        })

        const totalSpent=expenses.reduce((sum,e)=>sum+Number(e.amount),0);
        const thisMonthTotal=thisMonthExpenses.reduce((sum,e)=>sum+Number(e.amount),0);
        const lastMonthTotal=lastMonthExpenses.reduce((sum,e)=>sum+Number(e.amount),0);


        const percentChange=
        lastMonthTotal===0?null:
        ((thisMonthTotal-lastMonthTotal)/lastMonthTotal)*100;


        return{
            totalSpent,
            thisMonthTotal,
            transactionCount: expenses.length,
            thisMonthCount: thisMonthExpenses.length,
            percentChange
        };
    },[expenses])


    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SummaryCard
            lable="Total Spent"
            value={formatCurrency(stats.totalSpent)}
            icon={Wallet}
            iconColor="#3b82f6"
            />

              <SummaryCard
        label="This Month"
        value={formatCurrency(stats.thisMonthTotal)}
        icon={Calendar}
        iconColor="#22c55e"
        trend={
          stats.percentChange !== null
            ? {
                direction: stats.percentChange >= 0 ? "up" : "down",
                label: `${Math.abs(stats.percentChange).toFixed(0)}% vs last month`,
              }
            : undefined
        }
      />

      <SummaryCard
        label="Transactions"
        value={stats.transactionCount}
        icon={Receipt}
        iconColor="#a855f7"
      />

      <SummaryCard
        label="This Month's Transactions"
        value={stats.thisMonthCount}
        icon={TrendingUp}
        iconColor="#eab308"
      />
        </div>
    )
}