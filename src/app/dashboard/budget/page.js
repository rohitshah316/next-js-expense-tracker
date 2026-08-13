"use client"

import useExpenses from "@/hooks/useExpenses";
import {useMemo,useState} from "react"
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import BudgetChart from "@/components/charts/BudgetChart";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { categories } from "@/data/categories";
import { formatCurrency } from "@/lib/formatCurrency";
export default function BudgetPage(){
    const {expenses,budget,updateBudget,updateCategoryBudget,isLoaded,isBudgetLoaded}=useExpenses();

    const [monthlyInput,setMonthlyInput]=useState("");

    const thisMonthExpenses=useMemo(()=>{
        const now=new Date();
        return expenses.filter((e)=>{
            const d=new Date(e.date);
            return d.getMonth()===now.getMonth() && d.getFullYear()=== now.getFullYear();
        })

    },[expenses])

    const totalSpent=thisMonthExpenses.reduce((sum,e)=>sum+Number(e.amount),0);

    const categorySpending=useMemo(()=>{
        const totals={};
        thisMonthExpenses.forEach(e => {
            totals[e.category]=(totals[e.category]||0)+Number(e.amount);
        });
        return totals;
    },[thisMonthExpenses])

    if (!isLoaded || !isBudgetLoaded) {
    return <LoadingSpinner />;
  }

   const handleSetMonthlyBudget = (e) => {
    e.preventDefault();
    if (!monthlyInput || isNaN(monthlyInput)) return;
    updateBudget({ monthly: Number(monthlyInput) });
    setMonthlyInput("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Budget</h1>
        <p className="text-slate-500">Track spending against your monthly budget</p>
      </div>

      <Card>
        <h3 className="mb-4 font-semibold text-slate-800">Monthly Budget</h3>

        {budget.monthly > 0 ? (
          <BudgetChart
            label="Overall"
            spent={totalSpent}
            budgeted={budget.monthly}
          />
        ) : (
          <p className="text-sm text-slate-500 mb-4">No monthly budget set yet.</p>
        )}

        <form onSubmit={handleSetMonthlyBudget} className="mt-4 flex items-end gap-3">
          <div className="flex-1">
            <Input
              id="monthlyBudget"
              label="Set monthly budget"
              type="number"
              placeholder={budget.monthly > 0 ? String(budget.monthly) : "0.00"}
              value={monthlyInput}
              onChange={(e) => setMonthlyInput(e.target.value)}
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </Card>

      <Card>
        <h3 className="mb-4 font-semibold text-slate-800">Category Budgets</h3>

        <div className="space-y-5">
          {categories.map((category) => {
            const spent = categorySpending[category.id] || 0;
            const budgeted = budget.categories[category.id] || 0;

            return (
              <div key={category.id} className="space-y-2">
                <BudgetChart
                  label={category.name}
                  spent={spent}
                  budgeted={budgeted}
                  color={category.color}
                />
                <CategoryBudgetInput
                  categoryId={category.id}
                  currentValue={budgeted}
                  onSave={updateCategoryBudget}
                />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}


function CategoryBudgetInput({ categoryId, currentValue, onSave }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || isNaN(value)) return;
    onSave(categoryId, Number(value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="number"
        placeholder={currentValue > 0 ? String(currentValue) : "Set budget"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-32 rounded-lg border border-slate-300 px-2 py-1 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
      <button
        type="submit"
        className="text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        Save
      </button>
    </form>
  );
}