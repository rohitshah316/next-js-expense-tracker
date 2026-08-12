"use client";

import useExpenses from "@/hooks/useExpenses";
import Card from "@/components/ui/Card";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ExpensePieChart from "@/components/charts/ExpensePieChart";
import MonthlyChart from "@/components/charts/MonthlyChart";

export default function AnalyticsPage() {
  const { expenses, isLoaded } = useExpenses();

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-slate-500">Breakdown of your spending patterns</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">
            Spending by Category
          </h3>
          <ExpensePieChart expenses={expenses} />
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold text-slate-800">
            Monthly Trend (Last 6 Months)
          </h3>
          <MonthlyChart expenses={expenses} />
        </Card>
      </div>
    </div>
  );
}