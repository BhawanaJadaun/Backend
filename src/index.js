import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './.env'
});

console.log("MONGODB_URL:", process.env.MONGODB_URL); // Debug line to check the URL
console.log("PORT:", process.env.PORT); // Debug line to check the port

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});
