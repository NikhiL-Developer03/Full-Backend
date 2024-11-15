import mongoose from "mongoose";
import  {DB_NAME} from '../constants.js'

const connectDB = async () => {
  try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) //mongoose return a object so it can store in variable 
     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
     console.log(`\n check connectionInstance: ${connectionInstance}`)

  }catch(error){ 
    console.log("MONGODB connection Failed",error);
    process.exit(1); 
  }
}

export default connectDB;