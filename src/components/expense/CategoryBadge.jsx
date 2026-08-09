import { getCategoryById } from "@/data/categories";
import Badge from "../ui/Badge";



export default function CategorBadge({categoryId}){
    const category=getCategoryById(categoryId);


    return(
        <Badge
        style={{backgroundColor:`${category.color}20`,
            color:category.color,
        }}
        >{category.name}</Badge>
    )
}