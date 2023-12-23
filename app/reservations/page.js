import React from 'react';
import Carosusel from '../components/carosusel';
import Footer from '../components/footer';
import CollapsibleExample from '../components/header';

const Reservations = () => {
    return (
        <>
            <CollapsibleExample />

            <Carosusel heading={"Reservation Form"} menu={"RESERVATION"}  />

            <section class="section contact-section" id="next">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
                            <form action="#" method="post" class="bg-white p-md-5 p-4 mb-5 border">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label class="text-black font-weight-bold" for="name">Name</label>
                                        <input type="text" id="name" class="form-control" />
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label class="text-black font-weight-bold" for="phone">Phone</label>
                                        <input type="text" id="phone" class="form-control" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label class="text-black font-weight-bold" for="email">Email</label>
                                        <input type="email" id="email" class="form-control" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label class="text-black font-weight-bold" for="checkin_date">Date Check In</label>
                                        <input type="text" id="checkin_date" class="form-control" />
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label class="text-black font-weight-bold" for="checkout_date">Date Check Out</label>
                                        <input type="text" id="checkout_date" class="form-control" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label for="adults" class="font-weight-bold text-black">Adults</label>
                                        <div class="field-icon-wrap">
                                            <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                            <select name="" id="adults" class="form-control">
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label for="children" class="font-weight-bold text-black">Children</label>
                                        <div class="field-icon-wrap">
                                            <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                            <select name="" id="children" class="form-control">
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-md-12 form-group">
                                        <label class="text-black font-weight-bold" for="message">Notes</label>
                                        <textarea name="message" id="message" class="form-control " cols="30" rows="8"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="submit" value="Reserve Now" class="btn btn-primary text-white py-3 px-5 font-weight-bold mainBtnn b50" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div class="col-md-5" data-aos="fade-up" data-aos-delay="200">
                            <div class="row">
                                <div class="col-md-10 ml-auto contact-info">
                                    <p><span class="d-block">Address:</span> <span class="text-black"> 98 West 21th Street, Suite 721 New York NY 10016</span></p>
                                    <p><span class="d-block">Phone:</span> <span class="text-black"> (+1) 435 3533</span></p>
                                    <p><span class="d-block">Email:</span> <span class="text-black"> info@yourdomain.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section bg-image overlay" style={{ backgroundImage: 'url(images/hero_4.jpg)' }}>
                <div class="container" >
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
                            <h2 class="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
                        </div>
                        <div class="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
                            <a href="reservation.html" class="btn btn-outline-white-primary py-3 text-white px-5">Reserve Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
};

export default Reservations;
