import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    checkInDate: {
        type: String,
    },
    checkOutDate: {
        type: String,
    },
    adultCount: {
        type: String,
    },
    childrenCount: {
        type: String,
    },
    message: {
        type: String,
    }
}, {
    timestamps: true
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
