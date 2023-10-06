import express from "express";
import userModel from "../models/users/userSchema.js";
import { validationResult, body } from "express-validator";
import bycript from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { fetchUser } from "../middleware/fetchuser.js";
dotenv.config();
const key = process.env.TOKEN_KEY;

const router = express.Router();

router.post("/users/add", [
    body('fname', 'Enter a valid Full name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email Address').trim().isEmail(),
    body('mobile', 'Enter a valid mobile number').trim().isLength({ min: 10, max: 11 }),
    body('password', 'Enter minimum 8 Characters').trim().isLength({ min: 8 })
], async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ error: "Please Enter Correct Details" });
    }
    let userEmail = await userModel.findOne({ email: req.body.email });
    if (userEmail) {
        return res.status(400).send({ error: "User with this Email already exists" });
    }
    let userMobile = await userModel.findOne({ mobile: req.body.mobile });
    if (userMobile) {
        return res.status(400).send({ error: "User with this Mobile number already exists" });
    }

    try {
        const salt = await bycript.genSalt(10);
        const hashpassword = await bycript.hash(req.body.password, salt);

        const response = await userModel.create({
            fname: req.body.fname,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashpassword
        });

        success = "SignUp complete — Login Now!";

        res.status(201).json({ success });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

});


router.post('/users/login', [
    body('email', 'Enter a valid Email Address').trim().isEmail(),
    body('password', 'Enter minimum 8 Characters').trim().isLength({ min: 8 })
], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ error: "Enter a valid Email Address And Password" });
    }

    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ error: "This Email address is not registered with us." });
        }

        const checkPassword = await bycript.compare(req.body.password, user.password);

        if (!checkPassword) {
            return res.status(401).json({ error: "Wrong Email and Password" });
        }


        const token = jwt.sign({ user: user._id }, key);

        return res.status(201).json({ msg: "Login successful", token: token });
    } catch (error) {
        return res.status(500).json({ error: "internal server error" });
    }


});

router.patch('/users/cart/additem', fetchUser, async (req, res) => {

    try {
        const user = req.user;
        const newItem = req.body
        const cart = user.cart;
        cart.push(newItem);
        const updatedUser = await userModel.updateOne({ _id: user._id }, { cart: cart });
        if (updatedUser) {
            return res.status(201).json({ msg: "item added to cart",count:cart.length,cart: cart });
        }

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});


router.patch('/users/cart/removeitem', fetchUser, async (req, res) => {

    try {
        const user = req.user;
        const {id} = req.body
        const cart = user.cart;
        const newCart= cart.filter(item => item._id !== id)
        // console.log(newCart);
        const updatedUser = await userModel.updateOne({ _id: user._id }, { cart: newCart });
        if (updatedUser) {
            return res.status(201).json({ msg: "item removed from cart", count: newCart.length ,cart: newCart });
        }

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.post('/users/cartItems', fetchUser, async (req, res) => {
           try {
             const cart = req.user.cart
             return res.status(201).json(cart);

           } catch (error) {
            return res.status(400).json({ error: error.message });
           }
})

export default router;
