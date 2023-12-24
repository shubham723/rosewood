import React from 'react';
import BestPlace from '../components/bestPlace';
import Carosusel from '../components/carosusel';
import Footer from '../components/footer';
import CollapsibleExample from '../components/header';

const Events = () => {
    return (
        <>
            <CollapsibleExample />

            <Carosusel heading={"Events"} menu={"EVENTS"} />

            <section class="section blog-post-entry bg-light" id="next">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="200">
                            <div class="media media-custom d-block mb-4 h-100">
                                <a class="mb-4 d-block"><img src="images/event2.jpeg" alt="Image placeholder" class="img-fluid" /></a>
                                <div class="media-body">
                                    {/* <span class="meta-post">February 26, 2018</span> */}
                                    <h2 class="mt-0 mb-3"><a href="#">"Everlasting Love Knot: Wedding Journey"</a></h2>
                                    <p>Celebrate the union of hearts at "Everlasting Love Knot," where your journey begins. Celebrate a day filled with love, laughter, and cherished moments. Celebrate, let's create memories that will last a lifetime, surrounded by the warmth of family and friends.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="100">

                            <div class="media media-custom d-block mb-4 h-100">
                                <a class="mb-4 d-block"><img src="images/event1.jpeg" alt="Image placeholder" class="img-fluid" /></a>
                                <div class="media-body">
                                    {/* <span class="meta-post">February 26, 2018</span> */}
                                    <h2 class="mt-0 mb-3"><a href="#">Timeless Celebrations: Where Every Moment Matters</a></h2>
                                    <p>Celebrate unforgettable moments at Timeless Celebrations, where every gathering becomes a cherished memory. Whether it's a birthday, kitty party, or anniversary, we believe in making each moment special. Experience the joy of togetherness and create lasting memories with friends, family, and loved ones. We make sure to adds magic to celebrations!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <BestPlace />

            <Footer />
        </>
    )
};

export default Events;
