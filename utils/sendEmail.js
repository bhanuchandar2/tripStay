const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
console.log("📧 EMAIL_USER exists:", !!process.env.EMAIL_USER);
console.log("📧 EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
transporter.verify((error, success) => {
    if (error) {
        console.log("❌ SMTP connection failed:", error.message);
    } else {
        console.log("✅ SMTP connection successful");
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
    throw error;
}
}

module.exports = sendBookingEmail;