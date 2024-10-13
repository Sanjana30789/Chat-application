import mongoose from "mongoose";


const dburl = "mongodb+srv://sanjana3029:San30shal@clusterone.xzohs.mongodb.net/?retryWrites=true&w=majority&appName=Clusterone"
const dbconnect = async()=>{
    try {
        await mongoose.connect(dburl,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000, // Timeout for server selection
            maxPoolSize: 10, 
            socketTimeoutMS: 45000
        })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));
        console.log("DB connected successfully")
    } catch (error) {
        console.log(console.error)
    }
}

export default dbconnect