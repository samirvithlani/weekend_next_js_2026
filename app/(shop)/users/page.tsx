import { getAllUsers } from "@/lib/userapi";

export default async function  UserPage(){


    const users = await getAllUsers()
    console.log("users",users)
    return(
        <main>
            <h1 className="text-xl color-blue-500">USERS</h1>
            
        </main>
    )


}