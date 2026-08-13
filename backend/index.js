import express from "express";
import dotenv from "dotenv";
import { connectDb} from "./database/db.js";
import dns from "dns";
import { v2 as cloudinary } from "cloudinary";


dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

cloudinary.config({
    cloud_name:process.env.Cloudinary_Cloud_Name,
    api_key:process.env.Cloudinary_Api,
    api_secret:process.env.Cloudinary_Secret,
});

const app = express();

const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Server Working");
});

//importing routes
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

//using routes

app.use("api/users",userRoutes);
app.use("api/auth",authRoutes);
app.use("api/posts",postRoutes);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
})