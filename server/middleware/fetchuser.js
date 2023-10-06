import jwt from 'jsonwebtoken';
import userModel from "../models/users/userSchema.js";


export const fetchUser = async (req, res, next) => {
    try {
        const key = process.env.TOKEN_KEY;
        const token = req.headers.token;
        
        if (!token) {
            return  res.status(401).send({ error: "Please authenticate using a valid token" });
          }
        const userId = jwt.verify(token, key).user;
        const user = await userModel.findById(userId);
        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ error: error.message });
    }
  
}