const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./router/listingRouter.js");
const reviewRouter = require("./router/reviewsRouter.js");
const userRouter = require("./router/userRouter.js");
const bookingRouter = require("./router/bookingRouter.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.curruser = req.user;
    next();
});

app.get("/", (req, res) => {
    res.render("listings/home.ejs");
});

app.use("/listings", listingRouter);
app.use("/reviews", reviewRouter);
app.use("/user", userRouter);
app.use("/booking", bookingRouter);

app.use((err, req, res, next) => {
    console.log(err);

    let {
        status = 500,
        message = "Something went wrong"
    } = err;

    res.status(status).render("listings/error.ejs", {
        message
    });
});

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Successfully connected to DB");

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

