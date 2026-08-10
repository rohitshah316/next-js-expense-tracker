"use client"

import {useState} from 'react'
import { getCategoryOptions } from "@/data/categories";
import { validateExpense } from "@/lib/validations";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";


const emptyExpense={
    title:"",
    amount:"",
    category:"",
    date:new Date().toISOString().split("T")[0],
    description:"",
}

export default function ExpenseForm({initialValues,onSubmit,submitLabel="Add Expense"}){
    const [formData, setFormData] = useState(initialValues || emptyExpense);
    const [errors,setErrors]=useState({});
    const [isSubmitting,setIsSubmitting]=useState(false);

    const categoryOptions=getCategoryOptions();


    const handleChange=(field)=>(e)=>{
        setFormData((prev)=>({...prev,[field]:e.target.value}));

        if(errors[field]){
            setErrors((prev)=>({...prev,[field]:undefined}))
        }
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();

        const {errors:validateErrors,isValid}=validateExpense(formData);

        if(!isValid){
            setErrors(validateErrors);
            return;
        }

        setIsSubmitting(true);
        try{
            await onSubmit({...formData,amount:Number(formData.amount)})
        }finally{
            setIsSubmitting(false)
        }
    }


    return(
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                id="title"
                label="title"
                placeholder="e.g. Grocery shopping"
                value={formData.title}
                onChange={handleChange("title")}
                error={errors.title}
            />

            <Input
                id="amount"
                label="Amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.amount}
                onChange={handleChange("amount")}
                error={errors.amount}
            />

            <Select
            id="category"
            label="Category"
            options={categoryOptions}
            value={formData.category}
            onChange={handleChange("category")}
            error={errors.category}
            />

            <Input
            id="date"
            label="Date"
            type="date"
            value={formData.date}
            onChange={handleChange("date")}
            error={errors.date}
            />

            <Input
            id="description"
            label="Description (optional)"
            type="description"
            value={formData.description}
            onChange={handleChange("description")}
            error={errors.description}
            />

            <div className="flex gap-3 pt-2">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting?"Saving...":submitLabel}
                </Button>
            </div>



        </form>
    )
}