import Link from "next/link";
import Button from "./Button";


export default function EmptyState({title="No data found",description,actionLabel,actionHref}){
    return(
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 py-16 text-center">
            <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
            {description && (
                <p className="mt-1 text-sm text-slate-500">{description}</p>
            )}
            {actionLabel && actionHref && (
                <Link
                href={actionHref} className="mt-4"
                ><Button>{actionLabel}</Button></Link>
            )}
        </div>
    )
}