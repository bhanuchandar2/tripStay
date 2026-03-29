const express=require("express")
const router=express.Router()
const wrapAsync=require("../utils/wrapAsync")
const ExpressError=require("../utils/ExpressError")
const methodOverride=require('method-override')
const {listingSchema}=require("../schema.js")
const listing=require('../models/listing')
const {isLoggedIn}=require("../middleware.js")
router.use(methodOverride("_method"));

router.get("/",wrapAsync(async(req,res)=>{
    const allListings=await listing.find({}).populate("reviews").populate("owner");
    console.log(allListings)
    res.render("listings/index.ejs",{allListings})
}))
//create new listing
router.get("/new",isLoggedIn,async(req,res)=>{
    res.render("listings/create.ejs")
})
router.get("/:id/edit",isLoggedIn,async(req,res,next)=>{
    const {id}=req.params;
    const list=await listing.findById(id);
    res.render("listings/edit.ejs",{list})
})
//Edit List
router.put("/:id",async(req,res)=>{
    const {id}=req.params;
    await listing.findByIdAndUpdate(id,{...req.body.listing})
    req.flash("success","Listing Updated")
    res.redirect("/listings")

})
//add new listing
router.post("/newpost",isLoggedIn,wrapAsync(async(req,res)=>{
    console.log(req.body)
    const result=listingSchema.validate(req.body)
    // console.log(result.error);
    if(result.error){
        const msg = result.error.details.map(el => el.message).join(",");
        throw new ExpressError(500,msg)
    }
    const newpost=new listing(req.body.listing)
    newpost.owner=req.user._id;
    await newpost.save();
    console.log(req.body.listing);
    req.flash("success","Succesfully Added")
    res.redirect("/listings")
}))
//get listing details
router.get("/:id",wrapAsync(async(req,res,next)=>{
    const {id}=req.params;
    const list=await listing.findById(id).populate("reviews");
    if(!list){
        req.flash("error","Listing Not Found")
        return res.redirect("/listings")
    }
    // if(!list){
    //     next(new ExpressError(404,"Not Found"))
    // }
    res.render("listings/show",{list})
}))
//Delete Listing
router.delete('/delete/:id',isLoggedIn,async(req,res)=>{
    const {id}=req.params;
    const del=await listing.findByIdAndDelete(id);
    // res.send(`deleted ${del}`);
    req.flash("success","Listing Deleted")
    res.redirect("/listings")
})
module.exports=router;