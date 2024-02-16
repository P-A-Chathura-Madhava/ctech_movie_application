import mongoose from "mongoose";

const connectToDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/movie_db")
    } catch (e) {
        console.log(e);
    }
}