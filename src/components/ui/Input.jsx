import cn from "@/lib/helpers";



export default function Input({label,error,id,className,...props}){
    return(
        <div className="space-y-2">
            {label && (
                <label 
                    htmlFor={id}
                    className="block text-sm font-medium text-slate-700"
                >{label}</label>
            )}

            <input id={id} 
                className={cn(
                     "w-full rounded-lg border border-slate-300 bg-white px-3 py-2",
          "text-slate-900 placeholder:text-slate-400",
          "outline-none transition",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
          error && "border-red-500 focus:border-red-500",
          className
                )}
                {...props}
            />


            {error && (
                <p className="text-sm text-red-600">{error}</p>
            )}
        </div>
    )
}