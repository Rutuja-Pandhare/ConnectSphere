import {User} from "../models/userModel.js";
import getDataUrl from "../utils/urlGenerator.js";
import bcrypt from "bcrypt";

export const registerUser = async(req,res)=>{
    try{
        const {name, email, password, gender}= req.body;

        const file = req.file;
        
        if(!name || !email || !password || !gender){
            return res.status(400).json({
                message: "Please give all values",
            })
        }

        let user = await User.findOne({email});

        if(user) return res.status(400).json({
            message: "User Already Exist",
        });

        const fileUrl =  getDataUrl(file);

        const hashPassword = await bcrypt.hash(password,10);
        
        
    }catch(error){
       res.status(500).json({
        message: error.message,
       })
    }
}