const express=require("express")
const router=express.Router()
const wrapAsync=require("../utils/wrapAsync")
const methodOverride=require('method-override')
const {isLoggedIn,isOwner}=require("../middleware.js")
const review=require('../models/review')
const {reviewSchema}=require("../schema.js")
const ExpressError=require("../utils/ExpressError")
const listing=require('../models/listing')
router.use(methodOverride("_method"));

const reviewValidation=(req,res,next)=>{
    let{error}=reviewSchema.validate(req.body);
    if(error){
        let errmsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errmsg);
    }
    else{
        next();
    }
}

router.post("/:id/comment",isLoggedIn,reviewValidation,wrapAsync(async(req,res)=>{
    const{rating,comment}=req.body;
    console.log(req.body)
    const userid=req.user._id
    const newreview=new review({
        rating:rating,
        comment:comment,
        author:userid
        
    })
    console.log(newreview)
    await newreview.save();
    const{id}=req.params;
    const list=await listing.findById(id);
    list.reviews.push(newreview._id);
    await list.save();
    res.redirect(`/listings/${list._id}`)
}))

//get reviews
router.get("/get-reviews",async(req,res)=>{
const reviews=await review.find({}).populate("author");
console.log(reviews)
res.json(reviews)
})
//delete review
router.delete("/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
    const{id,reviewId}=req.params;
    await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await review.findByIdAndDelete(reviewId)
    res.redirect(`/listings/${id}`)
}))
module.exports=router;