const express=require("express")
const mongoose=require("mongoose")
const path=require("path")
const dotenv=require("dotenv").config()
const app=express();
const ejsMate=require("ejs-mate");
app.use(express.json());
const wrapAsync=require("./utils/wrapAsync")
const ExpressError=require("./utils/ExpressError")
const methodOverride=require('method-override')
const listingRouter=require("./router/listingRouter.js")
const reviewRouter=require("./router/reviewsRouter.js")
const userRouter=require("./router/userRouter.js")
const bookingRouter=require("./router/bookingRouter.js")
const flash = require('connect-flash');
const session = require('express-session');
const passport=require("passport")
const LocalStrategy=require('passport-local')
const User=require('./models/user.js')
app.set("view engine","ejs")
app.set("views",path.join(__dirname,'views'))
app.use(express.urlencoded({ extended: true }));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")))
app.use(methodOverride("_method"));

app.use(session({
    secret:"onesecret",
    resave:false,
    saveUninitialized:true
}))


app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash())
app.get('/',(req,res)=>{
    res.send("Welcome To Airbnb")
})
app.use((req,res,next)=>{
    res.locals.success=req.flash("success")
     res.locals.error=req.flash("error")
     res.locals.curruser=req.user
    next()
})


app.use("/listings",listingRouter)
app.use('/reviews',reviewRouter)
app.use("/user",userRouter)
app.use("/booking",bookingRouter)

mongoose.connect(process.env.MONGO_URL)
.then(console.log("succesfully connected to db"))
.catch(err=>console.log(err))

app.use((err,req,res,next)=>{
    console.log(err)
    let{status=500,message="something went wrong"}=err;
    res.status(404).render("listings/error.ejs",{message})
})
app.listen(process.env.PORT,()=>{
    console.log("sever running on port 3000")
});