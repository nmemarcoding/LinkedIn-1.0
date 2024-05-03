import mongoose from "mongoose"

const conectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.3kumqtp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`



if(!conectionString){
    throw new Error("Please define the MONGO_DB_USERNAME and MONGO_DB_PASSWORD env variables")
}

const connectDB = async () => {
   
    if(mongoose.connections[0]?.readyState >=1){
        console.log("Already connected")
        return
    }

    try{
        console.log("Connecting to database")
        await mongoose.connect(conectionString)

    }catch(error){
        console.error(error)
        process.exit(1)
    }
}