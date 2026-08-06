const express = require("express");
const router = express.Router();
const User=require("../models/user")
const Booking = require("../models/booking");
const {isLoggedIn}=require("../middleware.js")
const {redirectUrl}=require("../middleware.js")
const Listing=require("../models/listing")
// CREATE BOOKING
router.get("/:id", async (req, res) => {
    res.redirect(`/listings/${req.params.id}`);
});
router.post("/:id",isLoggedIn,redirectUrl,async (req, res) => {
    try {
        
        const { checkin, checkout, listingid, totalPrice } = req.body;
        console.log("body", req.body);
        console.log("userrr",req.user)
        // Check for overlapping bookings
        const existingBooking = await Booking.findOne({
            listingid,
            checkin: { $lt: new Date(checkout) },
            checkout: { $gt: new Date(checkin) }
        });

        if (existingBooking) {
            req.flash("error","these dates are already booked")
           return res.redirect("/listings")
        }
        const user=req.user._id;
        const newBooking = new Booking({
            user,
            checkin,
            checkout,
            listingid,
            totalPrice
        });
        // console.log("booking",newBooking);
        const listing = await Listing.findById(listingid)

        const curruser = await User.findById(req.user._id);
        curruser.bookings.push(newBooking._id);
        await curruser.save();
        await newBooking.save();
        req.flash("success","Succesfully booked")
        res.render("listings/booking.ejs", {
        booking: newBooking,listing

});

    

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// get bookings
router.get("/:id/show",async(req,res)=>{
    console.log(req.params.id)
    const user=await User.findById(req.params.id);
    const bookings=await user.populate("bookings");
    res.send(bookings)
})
// // DELETE BOOKING
// router.delete("/:id", async (req, res) => {
//     try {
//         const deletedBooking = await Booking.findByIdAndDelete(req.params.id);

//         if (!deletedBooking) {
//             return res.status(404).json({
//                 message: "Booking not found"
//             });
//         }

//         res.status(200).json({
//             message: "Booking deleted successfully"
//         });

//     } catch (err) {
//         res.status(500).json({
//             error: err.message
//         });
//     }
// });

module.exports = router;