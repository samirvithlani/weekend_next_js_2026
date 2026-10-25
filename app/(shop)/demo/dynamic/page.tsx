export const dynamic = "force-dynamic"
export default function DynamicPage(){

    const time =new Date().toLocaleTimeString("en-IN")

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">DYNAMIC PAGE</h1>
            <p className="mt-2">PAGE CREATION TIME :{time}</p>
        </main>
    )

}