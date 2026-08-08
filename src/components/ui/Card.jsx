import cn from "@/lib/helpers";


export default function Card({children,className}){

    return(
        <div 
        className={cn("rounded-xl border border-slate-200 bg-white p-6 shadow-sm")}
        >
            {children}
        </div>
    )
}