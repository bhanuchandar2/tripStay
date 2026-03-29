module.exports.isLoggedIn=(req,res,next)=>{
    console.log("Middleware running")
    if(!req.isAuthenticated()){
        req.session.originalUrl=req.originalUrl;
        console.log(req.user)
        req.flash("error","please login")
        return res.redirect("/user/login")
    }
    next();
}
module.exports.redirectUrl=(req,res,next)=>{
    if(req.session.originalUrl){
        res.locals.redirectUrl=req.session.originalUrl
    }
    next()
}