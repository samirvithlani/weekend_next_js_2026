import { getRandomQuote } from "@/lib/userapi"

export const dynamic = "force-dynamic"
export default async function DynamicPage(){

    const quote = await getRandomQuote('DYNAMIC')
    const time =new Date().toLocaleTimeString("en-IN")

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">DYNAMIC PAGE</h1>
            <p className="mt-2">PAGE CREATION TIME :{time}</p>
            <p className="mt-4 italic"> :{quote.quote}</p>
            <p className="mt-4 text-gray-600"> :{quote.author}</p>
        </main>
    )

}