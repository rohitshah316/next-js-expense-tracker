import Card from "@/components/ui/Card";
import cn from "@/lib/helpers";


export default function SummaryCard({label,value,icon:Icon,iconColor,trend}){
    return(
        <Card className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <p className="mt-1 text-2xl font-bold text-slate-800">{value}</p>

                {trend && (
                    <p
                    className={cn(
                        "mt-1 text-xs font-medium",
                        trend.direction==="up"?"text-red-600":"text-green-600"
                    )}
                    >
                        {trend.direction==="up"?"^":"v"} {trend.label}
                    </p>
                )}
            </div>

            {Icon && (
                <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{backgroundColor:`${iconColor}20`}}
                >
                    <Icon size={22} style={{color:iconColor}}/>
                </div>
            )}
        </Card>
    )
}