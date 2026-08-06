const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const passport=require("passport")
const User=require("../models/user")
const wrapAsync = require("../utils/wrapAsync")
const {redirectUrl}=require("../middleware.js")

router.get("/signup",async(req,res)=>{
    res.render("user/registerform.ejs")
})
router.post("/signup",wrapAsync(async(req,res)=>{
    try{
    const{username,email,password}=req.body
    const newuser=new User({username,email});
    const registereduser=await User.register(newuser,password)
    req.login(registereduser,(err)=>{
        if(err){
            return next(err)
        }
        req.flash("success","Welcome to tripStay")
        res.redirect("/listings")
    })
}
    catch(e){
      res.redirect("/user/signup")
    }
}
))
router.get("/login",redirectUrl,async(req,res)=>{
    res.render("user/loginform.ejs")
})
router.post("/login",redirectUrl,
    passport.authenticate("local",{
        failureRedirect:'/user/login',
        failureFlash:true
    }),
    async(req,res)=>{
       req.flash("success","welcome to tripstay")
       let redirects=res.locals.redirectUrl||"/listings"
       res.redirect(redirects)
})
router.get("/logout",async(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            return next(err)
        }
        req.flash("success"," Succesfully Logout")
        res.redirect("/listings")
    })
})
router.get("/getusers",async(req,res)=>{
    try{
        const users=await User.find({});
        res.json(users)
    }catch(e){
       console.log(e);
       res,json("intenal error")
    }
})
module.exports=router;