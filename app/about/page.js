import Link from 'next/link';
import React from 'react';
import BestPlace from '../components/bestPlace';
import Carosusel from '../components/carosusel';
import Footer from '../components/footer';
import CollapsibleExample from '../components/header';

const About = () => {
    return (
        <>
            <CollapsibleExample />

            <Carosusel heading={"About Us"} menu={"ABOUT"}  />

            <section class="py-5 bg-light" id="next">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
                            <figure class="img-absolute">
                                <img src="images/food-1.jpg" alt="Free Website Template by Templateux" class="img-fluid" />
                            </figure>
                            <img src="images/room6.jpeg" alt="Image" class="img-fluid rounded" />
                        </div>
                        <div class="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
                            <h2 class="heading">Welcome!</h2>
                            <p class="mb-4">Experience comfort in our stylish hotel with modern amenities, offering a welcoming retreat for a memorable stay in the heart of Zirakpur. Enjoy top-notch service and cozy accommodations, making your visit truly special.</p>
                            <p><Link href="/reservations" class="btn btn-primary text-white py-2 mr-3 btnn mainBtnn">Book Now</Link> </p>
                        </div>

                    </div>
                </div>
            </section>

            <div class="container section">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-md-7 mb-5">
                        <h2 class="heading" data-aos="fade-up">Leadership</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="block-2">
                            <div class="flipper">
                                <div class="front" style={{ backgroundImage: 'url(images/hero_4.jpg)' }}>
                                    <div class="box">
                                        <h2>Will Peters</h2>
                                        <p>President</p>
                                    </div>
                                </div>
                                <div class="back">
                                    <blockquote>
                                        <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                                    </blockquote>
                                    <div class="author d-flex">
                                        <div class="image mr-3 align-self-center">
                                            <img src="images/person_3.jpg" alt="" />
                                        </div>
                                        <div class="name align-self-center">Will Peters <span class="position">President</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="block-2">
                            <div class="flipper">
                                <div class="front" style={{ backgroundImage: 'url(images/hero_4.jpg)' }}>
                                    <div class="box">
                                        <h2>Jane Williams</h2>
                                        <p>Business Manager</p>
                                    </div>
                                </div>
                                <div class="back">
                                    <blockquote>
                                        <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                                    </blockquote>
                                    <div class="author d-flex">
                                        <div class="image mr-3 align-self-center">
                                            <img src="images/person_1.jpg" alt="" />
                                        </div>
                                        <div class="name align-self-center">Jane Williams <span class="position">Business Manager</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                        <div class="block-2">
                            <div class="flipper">
                                <div class="front" style={{ backgroundImage: 'url(images/hero_4.jpg)' }}>
                                    <div class="box">
                                        <h2>Jeffrey Neddery</h2>
                                        <p>Marketing Director</p>
                                    </div>
                                </div>
                                <div class="back">
                                    <blockquote>
                                        <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                                    </blockquote>
                                    <div class="author d-flex">
                                        <div class="image mr-3 align-self-center">
                                            <img src="images/person_2.jpg" alt="" />
                                        </div>
                                        <div class="name align-self-center">Jeffrey Neddery <span class="position">Marketing Director</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BestPlace />

            <Footer />
        </>
    );
};

export default About;
