import cn from "@/lib/helpers";


export default function Badge({children,style,className}){
    return(
        <span
        style={style}
        className={cn(
            "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium"
        )}
        >
            {children}
        </span>
    )
}