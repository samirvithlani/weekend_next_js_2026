import mongoose from "mongoose"

const MONGO_URI =process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/weekend2026_next"
console.log(MONGO_URI)
type MongooseCache ={
    conn:typeof mongoose | null,
    promise:Promise<typeof mongoose> | null
}

//gloabal connect
const g = globalThis as unknown as  { _mongoose?:MongooseCache}
const cache : MongooseCache = (g._mongoose ??= {conn:null,promise:null})

export async function connectDB(){
    if (cache.conn) return cache.conn

    if(!cache.promise){
        console.log("mongo db connection is being created...")
        cache.promise = mongoose.connect(MONGO_URI,{bufferCommands:false})
    }

    try{
        cache.conn =await cache.promise

    }
    catch(err){
        cache.promise = null
        throw err;
    }

    return cache.conn
}