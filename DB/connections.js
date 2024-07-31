import mongoose from "mongoose";

const connection = async ()=>{
    return await mongoose.connect(process.env.CONNECTIONDB)
    .then(()=>{
        console.log("database connected");
    }).catch(()=>{
        console.log("database error");
    })
}
export default connection;