export const revalidate =10
export default function DynamicPage(){

    const time =new Date().toLocaleTimeString("en-IN")

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">ISR PAGE (10 second)</h1>
            <p className="mt-2">PAGE CREATION TIME :{time}</p>
        </main>
    )

}