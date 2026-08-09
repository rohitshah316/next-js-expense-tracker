"use client"

import { useEffect, useState } from "react";

export default function useLocalStorage(key,initialValue){

    const [value,setValue]=useState(initialValue);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      try{
        const storedValue=localStorage.getItem(key)

        if(storedValue!=null){
            setValue(JSON.parse(storedValue))
        }
      }catch(err){
        console.error(`Failed to load localStorage key "${key}":`,err)
      }finally{
        setIsLoaded(true)
      }
    
    
    }, [key])
    

    useEffect(()=>{
        if(!isLoaded) return;
        try{
            localStorage.setItem(key,JSON.stringify(value));

        }catch(err){
            console.error(`Failed to save localStorage key "${key}":`,err)
        }
    },[key,value,isLoaded])


    return [value,setValue,isLoaded]
}