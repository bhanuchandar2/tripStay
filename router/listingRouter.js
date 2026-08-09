const express=require("express")
const router=express.Router()
const wrapAsync=require("../utils/wrapAsync")
const ExpressError=require("../utils/ExpressError")
const methodOverride=require('method-override')
const {listingSchema}=require("../schema.js")
const listing=require('../models/listing')
const {isLoggedIn,isOwner}=require("../middleware.js")
const { findById } = require("../models/review.js")
router.use(methodOverride("_method"));
const multer  = require('multer')
const {storage}=require('../cloudinaryConfig.js')
const upload = multer({ storage })


// const mbxGecoding= require('@mapbox/mapbox-sdk/services/tilesets/geocoding');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAPBOX
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

router.get("/",wrapAsync(async(req,res)=>{
    
    const allListings=await listing.find({}).populate("reviews").populate("owner");
    console.log(req.user)
    res.render("listings/index.ejs",{allListings})
}))

router.get("/list/surch",async(req,res)=>{
    const search=req.query.search;
    const listings = await listing.find({
    $or: [
    { title: { $regex: search, $options: "i" } },
    { description: { $regex: search, $options: "i" } },
    { country: { $regex: search, $options: "i" } },
    { location: { $regex: search, $options: "i" } },
    { category: { $regex: search, $options: "i" } }
  ]
});
res.render("listings/index.ejs", {
        allListings: listings
    });
})
//create new listing
router.get("/new",isLoggedIn,async(req,res)=>{
    res.render("listings/create.ejs")
})


//add new listing
router.post("/newpost",upload.single('listing[image]'),
    isLoggedIn,wrapAsync(async(req,res)=>{

    const response=await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
    })
    .send()
    
  
    let url=req.file.path
    let filename=req.file.filename
    const result=listingSchema.validate(req.body)
    if(result.error){
        const msg = result.error.details.map(el => el.message).join(",");
        throw new ExpressError(500,msg)
    }
    const newpost=new listing(req.body.listing)
    
    newpost.owner=req.user._id;
    
    
    newpost.image={url,filename}
    newpost.geometry=response.body.features[0].geometry;
    await newpost.save();
    
    req.flash("success","Succesfully Added")
    res.redirect("/listings")
})
)

//filter
router.get("/fetch/:cate",async(req,res)=>{
    const {cate}=req.params
    const filtered=await listing.find({category:cate})
    console.log(await listing.find({}, "category"));
    res.render("listings/index.ejs",{allListings:filtered})
})
router.get("/:id/edit",isLoggedIn,isOwner,async(req,res,next)=>{
    const {id}=req.params;
    const list=await listing.findById(id);
    res.render("listings/edit.ejs",{list})
})
//Edit List
router.put("/:id",isOwner,upload.single('listing[image]'),async(req,res)=>{
    const {id}=req.params;
    let newlisting=await listing.findByIdAndUpdate(id,{...req.body.listing})
    if(typeof req.file!="undefined"){
        let url=req.file.path
        let filename=req.file.filename
        newlisting.image={url,filename}
        await newlisting.save()
    }
    
    req.flash("success","Listing Updated")
    res.redirect("/listings")

})

//get listing details
router.get("/:id",wrapAsync(async(req,res,next)=>{
    const {id}=req.params;
    const list=await listing.findById(id).populate("reviews").populate("owner");
    console.log(list)
    if(!list){
        req.flash("error","Listing Not Found")
        return res.redirect("/listings")
    }
    
    res.render("listings/show",{list})
}))
//Delete Listing
router.delete('/delete/:id',isLoggedIn,isOwner,async(req,res)=>{
    const {id}=req.params;
    const del=await listing.findByIdAndDelete(id);
    // res.send(`deleted ${del}`);
    req.flash("success","Listing Deleted")
    res.redirect("/listings")
})
module.exports=router;