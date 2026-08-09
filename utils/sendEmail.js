const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendBookingEmail(to, bookingDetails) {
    
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: to,
            subject: "Booking Confirmation - TripStay",
            html: `
                <h2>Booking Confirmed 🎉</h2>

                <p>Hello ${bookingDetails.username},</p>

                <p>Your booking has been successfully confirmed.</p>

                <h3>Booking Details</h3>

                <p><b>Listing:</b> ${bookingDetails.title}</p>
                <p><b>Check-in:</b> ${bookingDetails.checkin}</p>
                <p><b>Check-out:</b> ${bookingDetails.checkout}</p>
                <p><b>Total Price:</b> ₹${bookingDetails.totalPrice}</p>

                <p>Thank you for booking with TripStay!</p>
            `
        });

        console.log("✅ Email sent successfully!");
        console.log("Message ID:", info.messageId);

    } catch (error) {
        console.log("❌ Email sending failed!");
        console.log(error);
    }
}

module.exports = sendBookingEmail;