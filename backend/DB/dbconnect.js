import mongoose from "mongoose";

const dbconnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000, // Timeout for server selection
            maxPoolSize: 10, 
        })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));
        console.log("DB connected successfully")
    } catch (error) {
        console.log(console.error)
    }
}

export default dbconnect