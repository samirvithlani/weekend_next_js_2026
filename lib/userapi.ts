import axios from "axios"
import { quote, User } from "./types"

const BASE_URL="https://node5.onrender.com"

export async function getAllUsers():Promise<User[]>{

    const {data} =  await axios.get(`${BASE_URL}/user/user`) 

    return data.data
}

export async function getRandomQuote(lable:string):Promise<quote>{
    console.log(`API CALL [${lable}] at `,new Date().toLocaleTimeString('en-IN'))
    const{data} = await axios.get(`https://dummyjson.com/quotes/random`)
    return data
   
}