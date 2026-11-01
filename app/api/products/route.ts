import { connectDB } from "@/lib/db";
import { Product } from "@/models/Products";
import { NextRequest, NextResponse } from "next/server";

//localhost:3000/api/products
export async function GET(req:NextRequest) {
    
    await connectDB()

    const products = await Product.find({})
    //response..
    return NextResponse.json({data:products})

}

export async function POST(req:NextRequest) {
    
    const body = await req.json()

    return NextResponse.json({data:body})
}