import mongoose from "mongoose";

const connectMongoDb = async() => {
    try{
        await mongoose.connect(process.env.MongoDB_URI);
        console.log("coonnnect successfully")
    } catch(error){
        console.log(error);
    }
};
export default connectMongoDb;