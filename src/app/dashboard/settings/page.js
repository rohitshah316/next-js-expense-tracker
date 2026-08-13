"use client"

import { useState } from "react";
import useExpenses from "@/hooks/useExpenses";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { CURRENCY_OPTIONS, APP_NAME } from "@/lib/constants";


export default function SettingsPage(){
    const {
        settings,updateSettings,isSettingsLoaded,clearAllData,expenses,isLoaded
    }=useExpenses();

    const [showResetModal,setShowResetModal]=useState(false);

    if(!isSettingsLoaded || !isLoaded){
        return <LoadingSpinner/>
    }

    const handleCurrencyChange=(e)=>{
        updateSettings({currency:e.target.value})
    }

    const handleExport = () => {
    const dataStr = JSON.stringify(expenses, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `expenses-export-${new Date().toISOString().split("T")[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    clearAllData();
    setShowResetModal(false);
  };

   return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-slate-500">Manage your {APP_NAME} preferences</p>
      </div>

      <Card>
        <h3 className="mb-4 font-semibold text-slate-800">Preferences</h3>

        <Select
          id="currency"
          label="Currency"
          options={CURRENCY_OPTIONS}
          value={settings.currency}
          onChange={handleCurrencyChange}
        />
      </Card>

      <Card>
        <h3 className="mb-4 font-semibold text-slate-800">Data</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-700">Export data</p>
              <p className="text-xs text-slate-500">
                Download all your expenses as a JSON file
              </p>
            </div>
            <Button variant="secondary" onClick={handleExport}>
              Export
            </Button>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <div>
              <p className="text-sm font-medium text-slate-700">Reset all data</p>
              <p className="text-xs text-slate-500">
                Permanently delete all expenses and budget settings
              </p>
            </div>
            <Button variant="danger" onClick={() => setShowResetModal(true)}>
              Reset
            </Button>
          </div>
        </div>
      </Card>

      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Reset All Data"
      >
        <p className="text-slate-600 mb-6">
          This will permanently delete all {expenses.length} expenses and your
          budget settings. This cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setShowResetModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleReset}>
            Yes, Reset Everything
          </Button>
        </div>
      </Modal>
    </div>
  );
}
