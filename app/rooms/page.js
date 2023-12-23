import React from 'react';
import Availability from '../components/availability';
import Carosusel from '../components/carosusel';
import Footer from '../components/footer';
import CollapsibleExample from '../components/header';

const Rooms = () => {
  return (
    <>
      <CollapsibleExample />

      <Carosusel heading={"Rooms"} menu={"ROOMS"} />

      <Availability />

      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
              <a href="#" class="room">
                <figure class="img-wrap">
                  <img src="images/room5.jpeg" alt="Free website template" class="img-fluid mb-3" />
                </figure>
                <div class="p-3 text-center room-info">
                  <h2>Single Room</h2>
                  <span class="text-uppercase letter-spacing-1 mainClr">90$ / per night</span>
                </div>
              </a>
            </div>

            <div class="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
              <a href="#" class="room">
                <figure class="img-wrap">
                  <img src="images/room7.jpeg" alt="Free website template" class="img-fluid mb-3" />
                </figure>
                <div class="p-3 text-center room-info">
                  <h2>Family Room</h2>
                  <span class="text-uppercase letter-spacing-1 mainClr">120$ / per night</span>
                </div>
              </a>
            </div>

            <div class="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
              <a href="#" class="room">
                <figure class="img-wrap">
                  <img src="images/room6.jpeg" alt="Free website template" class="img-fluid mb-3" />
                </figure>
                <div class="p-3 text-center room-info">
                  <h2>Presidential Room</h2>
                  <span class="text-uppercase letter-spacing-1 mainClr">250$ / per night</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section bg-light">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading" data-aos="fade">Great Offers</h2>
              <p data-aos="fade">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>

          <div class="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="100">
            <a href="#" class="image d-block bg-image-2" style={{ backgroundImage: 'url(images/room2.jpeg)' }}></a>
            <div class="text">
              <span class="d-block mb-4"><span class="display-4 mainClr">$199</span> <span class="text-uppercase letter-spacing-2">/ per night</span> </span>
              <h2 class="mb-4">Family Room</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><a href="#" class="btn btn-primary text-white btnn mainBtnn">Book Now</a></p>
            </div>
          </div>
          
          <div class="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="200">
            <a href="#" class="image d-block bg-image-2 order-2" style={{ backgroundImage: 'url(images/room7.jpeg)' }}></a>
            <div class="text order-1">
              <span class="d-block mb-4"><span class="display-4 mainClr">$299</span> <span class="text-uppercase letter-spacing-2">/ per night</span> </span>
              <h2 class="mb-4">Presidential Room</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><a href="#" class="btn btn-primary text-white btnn mainBtnn">Book Now</a></p>
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
  );
};

export default Rooms;
