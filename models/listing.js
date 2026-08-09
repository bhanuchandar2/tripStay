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
        owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        geometry: {
            type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
            },
        coordinates: {
        type: [Number],
        required: true
        }
  }
    }
)
Listing.post("findOneAndDelete",async(doc)=>{
    if(doc){
        await Review.deleteMany({_id:{$in:doc.reviews}})
    }
})
const listing=mongoose.model('listing',Listing)
module.exports=listing;