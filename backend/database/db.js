import mongoose from 'mongoose';

export const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            dbName: "ConnectSphere",
        });
        console.log("Connected to MongoDb");
    }catch(error){
        console.log(error);
    }
}