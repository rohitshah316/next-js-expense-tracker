


export default function LoadingSpinner({size=24}){
    return(
        <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
            style={{width:size,height:size}}
            ></div>
        </div>
    )
}