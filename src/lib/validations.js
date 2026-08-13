import { isValid } from "date-fns";


export function validateExpense(expense){
    const errors={};

    if(!expense.title || expense.title.trim().length===0){
        errors.title="Title is required";
    }else if(expense.title.trim().length<2){
        errors.title="Title must be at least 2 characters"
    }


    if(!expense.amount){
        errors.amount="Amount is required";
    }else if(isNaN(expense.amount) || Number(expense.amount)<=0){
        errors.amount="Amount must be a positive number";
    }

    if(!expense.category){
        errors.category="Category is required";
    }

    if(!expense.date){
        errors.date="Date is required";
    }else{
        const selectedDate=new Date(expense.date);
        const today=new Date();
        today.setHours(23,59,59,999);

        if(selectedDate>today){
            errors.date="Date cannot be in the future";
        }
    }


    return{
        errors,
        isValid:Object.keys(errors).length===0
    }
}