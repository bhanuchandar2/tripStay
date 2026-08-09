const mongoose=require("mongoose")
const Booking=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    
    checkin:{
        type:Date,
        required:true
    },
    checkout:{
        type:Date,
        required:true
    },
    // listingid:{
    //     type:String,
    //     required:true
    // }
    listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "listing",
    required: true
}
})
const booking=mongoose.model('booking',Booking)
module.exports=booking