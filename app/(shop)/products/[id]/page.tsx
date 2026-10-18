import BackButton from "@/components/BackButton"
import { getProductById } from "@/lib/products"

export default async function ProductDetailPage({params}:{params:Promise<{id:string}>}){
    //url alwasy give deata in string
    const {id} =  await params
    const foundProduct = getProductById(Number(id))
    return(
        <main className="p-8">
            <h1 className="mt-4 text-3xl font-bold">{foundProduct?.name}</h1>
            <BackButton/>
        </main>
    )
}