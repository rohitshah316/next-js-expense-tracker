import cn from "@/lib/helpers";


const variants={
    primary:'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:'bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-400',
    danger:'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost:'bg-transparent text-slate-600 hover:bg-slate-100 focus:ring-slate-400'
}

export default function Button({children,variant="primary",className,...props}){

    return(
        <button
        className={cn("inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2",
            "font-medium transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            className
        )}
        {...props}
        >
            {children}
        </button>
    )
}