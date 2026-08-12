const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendBookingEmail(to, bookingDetails) {
    try {
        const { data, error } = await resend.emails.send({
            from: "TripStay <onboarding@resend.dev>",
            to: [to],
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

        if (error) {
            console.log("❌ Email failed:", error);
            throw new Error(error.message);
        }

        console.log("✅ Email sent successfully!");
        console.log("Message ID:", data.id);

        return data;

    } catch (error) {
        console.log("❌ Email sending failed:", error.message);
        throw error;
    }
}

module.exports = sendBookingEmail;