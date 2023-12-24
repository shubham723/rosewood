'use client'
import axios from 'axios';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Carosusel from '../components/carosusel';
import Footer from '../components/footer';
import CollapsibleExample from '../components/header';

const Reservations = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            checkInDate: '',
            checkOutDate: '',
            adultCount: 1,
            childrenCount: 1,
            message: ''
        }
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await axios.post('/api/booking', data);
            toast.success("Enquiry Sent. We'll be in touch shortly");
            reset();
            setLoading(false);
        } catch (error) {
            toast.error("Something went wrong.Please try again later.");
            setLoading(false);
        }
    };

    console.log(watch("name"))
    console.log(errors)
    return (
        <>
            <CollapsibleExample />

            <Carosusel heading={"Reservation Form"} menu={"RESERVATION"} />

            <section className="section contact-section" id="next">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
                            <form className="bg-white p-md-5 p-4 mb-5 border" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label className="text-black font-weight-bold" for="name">Name</label>
                                        <input type="text" id="name" className="form-control"  {...register("name", { required: 'Name is required' })} />
                                        {errors.name && (
                                            <span className="error">{errors.name.message}</span>
                                        )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="text-black font-weight-bold" for="phone">Phone</label>
                                        <input type="number" min={0} id="phone" className="form-control"  {...register("phone", {
                                            required: 'Phone is required', pattern: {
                                                value: /^[0-9]{10}$/i,
                                                message: 'Invalid phone number'
                                            }
                                        })} />
                                        {errors.phone && (
                                            <span className="error">{errors.phone.message}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label className="text-black font-weight-bold" for="email">Email</label>
                                        <input type="email" id="email" className="form-control" aria-invalid={errors.mail ? "true" : "false"} {...register("email", {
                                            required: 'Email is required', pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })} />
                                        {errors.email && (
                                            <span className="error">{errors.email.message}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label className="text-black font-weight-bold" for="checkin_date">Date Check In</label>
                                        <input type="date" id="checkin_date" className="form-control"  {...register("checkInDate", { required: 'Check In Date is required' })} />
                                        {errors.checkInDate && (
                                            <span className="error">{errors.checkInDate.message}</span>
                                        )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="text-black font-weight-bold" for="checkout_date">Date Check Out</label>
                                        <input type="date" id="checkout_date" className="form-control"  {...register("checkOutDate", { required: 'Check Out Date is required' })} />
                                        {errors.checkOutDate && (
                                            <span className="error">{errors.checkOutDate.message}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label for="adults" className="font-weight-bold text-black">Adults</label>
                                        <div className="field-icon-wrap">
                                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                            <select name="" id="adults" className="form-control"  {...register("adultCount", { required: 'Adult Count is required' })} >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4+</option>
                                            </select>
                                            {errors.adultCount && (
                                                <span className="error">{errors.adultCount.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label for="children" className="font-weight-bold text-black">Children</label>
                                        <div className="field-icon-wrap">
                                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                            <select name="" id="children" className="form-control"  {...register("childrenCount", { required: 'Children Count is required' })} >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4+</option>
                                            </select>
                                            {errors.childrenCount && (
                                                <span className="error">{errors.childrenCount.message}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-12 form-group">
                                        <label className="text-black font-weight-bold" for="message">Notes</label>
                                        <textarea name="message" id="message" className="form-control " cols="30" rows="8"  {...register("message", { required: 'Message is required' })} ></textarea>
                                        {errors.message && (
                                            <span className="error">{errors.message.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <button type="submit" className="btn btn-primary text-white py-3 px-5 font-weight-bold mainBtnn b50" disabled={loading}>
                                            {
                                                loading ? <Spinner animation='grow' /> : 'Reserve Now'
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-5" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-md-10 ml-auto contact-info">
                                    <p><span className="d-block">Address:</span> <span className="text-black"> SCO 7-8, Shri Ganesh Complex Zirakpur, Punjab 140603</span></p>
                                    <p><span className="d-block">Phone:</span> <span className="text-black"> +91 7986612608 | +91 7347372702 | +91 9878459791 </span></p>
                                    <p><span className="d-block">Email:</span> <span className="text-black"> hotelrosewood956@gmail.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
};

export default Reservations;
