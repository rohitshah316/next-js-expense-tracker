"use client"

import { formatCurrency } from "@/lib/formatCurrency";
import cn from "@/lib/helpers";

export default function BudgetChart({label,spent,budgeted,color="#3b82fc"}){
    const percent=budgeted>0?Math.min((spent/budgeted)*100,100):0;
    const isOver=spent>budgeted && budgeted >0;

    return(
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">
                    {label}
                </span>
                <span className={cn("font-medium",isOver?"text-red-600":"text-slate-500")}>{formatCurrency(spent)} / {formatCurrency(budgeted)}</span>
            </div>


            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full transition-all"
                style={{
                    width:`{percent}%`,
                    backgroundColor:isOver?"#ef4444":color,
                }}
                ></div>
            </div>

            {isOver && (
                <p className="text-xs text-red-600">
                    {formatCurrency(spent-budgeted)} over budget
                </p>
            )}
        </div>
    )
}