export const categories = [
  {
    id: "food",
    name: "Food",
    color: "#f97316",
  },
  {
    id: "transport",
    name: "Transport",
    color: "#3b82f6",
  },
  {
    id: "shopping",
    name: "Shopping",
    color: "#a855f7",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    color: "#ec4899",
  },
  {
    id: "bills",
    name: "Bills",
    color: "#ef4444",
  },
  {
    id: "health",
    name: "Health",
    color: "#22c55e",
  },
  {
    id: "education",
    name: "Education",
    color: "#eab308",
  },
  {
    id: "other",
    name: "Other",
    color: "#64748b",
  },
];


export function getCategoryById(id){
  return categories.find((category)=>category.id===id) || categories[categories.length-1];
}

export function getCategoryOptions(){
  return categories.map((category)=>({
    value:category.id,
    label: category.name
  }))
}