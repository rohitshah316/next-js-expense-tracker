"use client"

import { formatCurrency } from "@/lib/formatCurrency";
import Card from "../ui/Card";
import CategorBadge from "./CategoryBadge";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

export default function ExpenseItem({expense,onDelete}){
    return(
        <Card className="flex items-center justify-between">
            <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                    <p className="font-semibold text-slate-800">{expense.title}</p>
                    <CategorBadge categoryId={expense.category}/>
                </div>
                <p className="text-sm text-slate-500">
                    {new Date(expense.date).toLocaleDateString("en-US",{
                        month:"short",
                        day:"numeric",
                        year:"numeric"
                    })}
                    {expense.description && ` . ${expense.description}`}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <span className="font-semibold text-slate-800">
                    {formatCurrency(expense.amount)}
                </span>

                <Link href={`/dashboard/expense/${expense.id}/edit`}
                className="text-slate-400 hover:text-blue-600"
                ><Pencil size={18}/></Link>


                <button
                onClick={()=>onDelete(expense.id)}
                className="text-slate-400 hover:text-red-600"
                ><Trash2 size={18}/></button>
            </div>
        </Card>
    )
}