import { DEFAULT_CURRENCY } from "./constants";


export function formatCurrency(amount,currency=DEFAULT_CURRENCY){
    const numericAmount=Number(amount) || 0;

    if(currency==="NPR"){
        return  `Rs. ${numericAmount.toLocaleString("en-NP",{
            minimumFractionDigits:2,
            maximumFractionDigits:2,
        })}`;
    }

    return new Intl.NumberFormat("en-US",{
        style:"currency",
        currency,
    }).format(numericAmount)

}