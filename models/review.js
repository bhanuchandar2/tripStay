const { number, date } = require("joi");
const mongoose=require("mongoose");
const ReviewSchema=new mongoose.Schema({
    comment:{
        type:String
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt: {
    type: Date,
    default: Date.now
}
})
const review=mongoose.model("Review",ReviewSchema)
module.exports=review