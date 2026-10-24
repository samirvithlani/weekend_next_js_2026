import axios from "axios"
import { User } from "./types"

const BASE_URL="https://node5.onrender.com"

export async function getAllUsers():Promise<User[]>{

    const {data} =  await axios.get(`${BASE_URL}/user/user`) 

    return data.data
}