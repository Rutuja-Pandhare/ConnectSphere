import express from "express";
import dotenv from "dotenv";
import { connectDb} from "./database/db.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
})