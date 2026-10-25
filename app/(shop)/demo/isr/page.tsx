import { getRandomQuote } from "@/lib/userapi"

export const revalidate =10
export default async function DynamicPage(){

    const quote = await getRandomQuote('ISR')
    const time =new Date().toLocaleTimeString("en-IN")


    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">ISR PAGE (10 second)</h1>
            <p className="mt-2">PAGE CREATION TIME :{time}</p>
            <p className="mt-4 italic"> :{quote.quote}</p>
            <p className="mt-4 text-gray-600"> :{quote.author}</p>
        </main>
    )

}