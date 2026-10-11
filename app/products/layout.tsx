import React from "react";

export default function ProductLayout({children}:{children:React.ReactNode}){

    return(
        <div>
        <div className="bg-gray-300 px-8 py-3 text-sm text-gray-700">
            Free Delivery on orders above 999
        </div>
        {children}
        </div>
    )
}