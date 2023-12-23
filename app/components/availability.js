'use client'
import { addReservation } from '../../services/index';
import React, { useState } from 'react';

const Availability = () => {
    const [reservation, setReservation] = useState({
        checkInDate: '',
        checkOutDate: '',
        adultCount: 1,
        childrenCount: 1
    });

    const addReservationHandler = async (e) => {
        console.log('vz');
        e.preventDefault();
        try {
            await addReservation(reservation);
        } catch (error) {
            
        }
    };

    const changeHandler = (e) => {
        console.log('vz', e.target.name, e.target.value);
        setReservation({ ...reservation, [e.target.name]: e.target.value });
    };

    return (
        <section class="section bg-light pb-0"  >
            <div class="container">

                <div class="row check-availabilty" id="next">
                    <div class="block-32" data-aos="fade-up" data-aos-offset="-200">

                        <form onSubmit={(e) => addReservationHandler(e)}>
                            <div class="row">
                                <div class="col-md-6 mb-3 mb-lg-0 col-lg-3">
                                    <label for="checkin_date" class="font-weight-bold text-black">Check In</label>
                                    <div class="field-icon-wrap">
                                        <div class="icon"><span class="icon-calendar"></span></div>
                                        <input type="date" id="checkin_date" class="form-control" name="checkInDate" onChange={(e) => changeHandler(e)} />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3 mb-lg-0 col-lg-3">
                                    <label for="checkout_date" class="font-weight-bold text-black">Check Out</label>
                                    <div class="field-icon-wrap">
                                        <div class="icon"><span class="icon-calendar"></span></div>
                                        <input type="date" id="checkout_date" class="form-control" name="checkOutDate" onChange={(e) => changeHandler(e)} />
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3 mb-md-0 col-lg-3">
                                    <div class="row">
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <label for="adults" class="font-weight-bold text-black">Adults</label>
                                            <div class="field-icon-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="adultCount" id="adults" class="form-control" onChange={(e) => changeHandler(e)}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <label for="children" class="font-weight-bold text-black">Children</label>
                                            <div class="field-icon-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="childrenCount" id="children" class="form-control" onChange={(e) => changeHandler(e)}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4+</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 align-self-end">
                                    <button class="btn btn-primary btn-block text-white btnn mainBtnn" type='submit'>Check Availabilty</button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </section>
    )
};

export default Availability;
