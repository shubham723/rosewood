import dbConnect from "@/lib/dbConnect";
import { Reservation } from "@/models/reservations";
import { NextResponse } from "next/server";

const createBooking = (payload) => {
    const newBooking = new Reservation(payload);
    return newBooking.save();
};

export async function POST(req) {
    await dbConnect();
    try {
        const body = await req.json();
        console.log(body);
        const booking = await createBooking(body);
        return NextResponse.json({ success: true, data: booking });       
    } catch (error) {
        return NextResponse.json({ message: 'Something Went Wrong', error: error?.message });
    }
};
