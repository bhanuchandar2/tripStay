const mongoose=require("mongoose")
const Review=require("./review.js")
const Listing=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        image: {
       filename: String,
       url: String
  },
        price:{
            type:Number,
            required:true
        },
        location:{
            type:String
        },
        country:{
            type:String
        },
        category:{
            type:String,
            enum:["Rooms","trending","mountains"]
        },
        reviews:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Review"
            }
        ],
        owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }
)
Listing.post("findOneAndDelete",async(doc)=>{
    if(doc){
        await Review.deleteMany({_id:{$in:doc.reviews}})
    }
})
const listing=mongoose.model('listing',Listing)
module.exports=listing;