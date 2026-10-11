import React from "react";

export default function AboutLayout({children}:{children:React.ReactNode}){

    return(
        <div>
        <div className="bg-yellow-300 px-8 py-3 text-sm text-yellow-700">
            About compnay
        </div>
        {children}
        </div>
    )
}