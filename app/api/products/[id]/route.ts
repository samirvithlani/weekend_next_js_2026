import { NextRequest, NextResponse } from "next/server";

type Ctx = {params:Promise<{id:string}>}

//localhost:3000/api/products/1
export async function GET(req:NextRequest,{params}:Ctx) {
    
    return NextResponse.json({message:`get by id and id = ${(await params).id}`})
}
//DELETE
//PATCH
//PUT