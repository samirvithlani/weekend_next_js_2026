"use client"
import { useRouter } from "next/navigation"


export default function BackButton(){
    const router = useRouter()
    return (
        <button className="text-sm text-blue-600" onClick={()=>{router.back()}}>
            Back
        </button>

    )
}