import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async()=>{
    try{
        const connectInstantance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,
        { useNewUrlParser: true, useUnifiedTopology: true }
        )
        

        console.log(`\n mongodb connect setup!! DB_HOST: ${connectInstantance.connection.host}`)
        
    }catch(error){
        console.error("mongp db error==>",error);
        process.exit(1);
    }

}

export default connectDB;