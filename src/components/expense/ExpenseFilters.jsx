"use client"

import { getCategoryOptions } from "@/data/categories";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";


export default function ExpenseFilters({filters,onChange,onReset}){
    const categoryOptions=getCategoryOptions();

    const handleFieldChange=(field)=>(e)=>{
        onChange({...filters,[field]:e.target.value})
    }

    return(
        <div className="flex flex-wrap items-end gap-4 rounded-xl border border-slate-200 bg-white p-4">
            <div className="w-48">
                <Input
                    id="search"
                    label="Search"
                    placeholder="Search by title..."
                    value={filters.search}
                    onChange={handleFieldChange("search")}
                />


            </div>

            <div className="w-48">
                <Select
                id="filterCategory"
                label="Category"
                options={categoryOptions}
                value={filters.category}
                onChange={handleFieldChange("category")}
                />
            </div>

            <div className="w-40">
                <Input
                    id="fitlerStartDate"
                    label="From"
                    type="date"
                  
                    value={filters.startDate}
                    onChange={handleFieldChange("startDate")}
                />


            </div>

            <div className="w-40">
                <Input
                    id="fitlerEndDate"
                    label="To"
                    type="date"
                  
                    value={filters.endDate}
                    onChange={handleFieldChange("endDate")}
                />


            </div>

            <Button variant="secondary" onClick={onReset}>Reset</Button>

        </div>
    )
}