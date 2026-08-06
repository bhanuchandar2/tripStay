const listing=require("./models/listing")
module.exports.isLoggedIn=(req,res,next)=>{
    
    if(!req.isAuthenticated()){
        req.session.originalUrl=req.originalUrl;
        console.log(req.session.originalUrl);
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
module.exports.isOwner=async(req,res,next)=>{
    const {id}=req.params;
    const Listing=await listing.findById(id);
    if(!Listing.owner._id.equals(res.locals.curruser._id)){
        req.flash("error","You not have a permission to Edit");
        return res.redirect(`/listings/${id}`)
    }
    next()
}