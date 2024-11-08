import mongoose from "mongoose";

const connectMongo = async () => {
    if (mongoose.connection.readyState === 1) {
        return;
    }
    
    await mongoose.connect(process.env.MONGODB_URI).then(()=>{
      console.log("MongoDB Connected");
    }).catch(err=>console.log(error));
}
export default connectMongo;