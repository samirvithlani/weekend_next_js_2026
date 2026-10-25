import { getRandomQuote } from "@/lib/userapi"

export default async function StaticPage(){

    
    const quote = await getRandomQuote('STATOC')
    const time =new Date().toLocaleTimeString("en-IN")

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">STATIC PAGE</h1>
            <p className="mt-2">PAGE CREATION TIME :{time}</p>
            <p className="mt-4 italic"> :{quote.quote}</p>
            <p className="mt-4 text-gray-600"> :{quote.author}</p>
        </main>
    )

}