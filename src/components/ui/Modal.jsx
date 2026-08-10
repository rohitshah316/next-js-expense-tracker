"use client"

import { X } from 'lucide-react';
import {useEffect} from 'react';


export default function Modal({isOpen,onClose,title,children}){
    useEffect(()=>{
        const handleEscape=(e)=>{
            if(e.key==="Escape") onClose();
        };

        if(isOpen){
            document.addEventListener("keydown",handleEscape);
            document.body.style.overflow="hidden"
        }

        return()=>{
            document.removeEventListener("keydown",handleEscape);
            document.body.style.overflow="unset"
        }
    },[isOpen,onClose])
    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50"
            onClick={onClose}
            >

            </div>

            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
                    <button 
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600"><X size={20}/></button>
                </div>

                {children}
            </div>
        </div>
    )
}