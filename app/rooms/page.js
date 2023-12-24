'use client'
import { useRouter } from 'next/navigation';
import BestPlace from '../components/bestPlace';
import Carosusel from '../components/carosusel';
import Footer from '../components/footer';
import CollapsibleExample from '../components/header';

const Rooms = () => {
  const router = useRouter();

  return (
    <>
      <CollapsibleExample />

      <Carosusel heading={"Rooms"} menu={"ROOMS"} />

      {/* <Availability /> */}

      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-5" data-aos="fade-up">
              <a class="room pointer" onClick={() => router.push('/reservations')}>
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
              <a class="room pointer" onClick={() => router.push('/reservations')}>
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
              <a class="room pointer" onClick={() => router.push('/reservations')}>
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
              <p data-aos="fade">Discover irresistible deals and save big with our great offers, adding value and excitement to your experience at our establishment</p>
            </div>
          </div>

          <div class="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="100">
            <a href="#" class="image d-block bg-image-2" style={{ backgroundImage: 'url(images/room2.jpeg)' }}></a>
            <div class="text">
              <span class="d-block mb-4"><span class="display-4 mainClr">$199</span> <span class="text-uppercase letter-spacing-2">/ per night</span> </span>
              <h2 class="mb-4">Family Room</h2>
              <p>Discover comfort and togetherness in our family room. Thoughtfully designed for shared moments, this inviting space offers a cozy retreat for the whole family. Enjoy quality time surrounded by warmth and modern amenities. Make lasting memories in a room that feels like home.</p>
              <p><a class="btn btn-primary text-white btnn mainBtnn pointer" onClick={() => router.push('/reservations')}>Book Now</a></p>
            </div>
          </div>
          
          <div class="site-block-half d-block d-lg-flex bg-white" data-aos="fade" data-aos-delay="200">
            <a href="#" class="image d-block bg-image-2 order-2" style={{ backgroundImage: 'url(images/room7.jpeg)' }}></a>
            <div class="text order-1">
              <span class="d-block mb-4"><span class="display-4 mainClr">$299</span> <span class="text-uppercase letter-spacing-2">/ per night</span> </span>
              <h2 class="mb-4">Presidential Room</h2>
              <p>Indulge in luxury and prestige in our Presidential Room. Experience opulent living with spacious accommodations, exquisite decor, and top-notch amenities. Elevate your stay with exclusive services tailored for a truly regal experience. Unwind in style and enjoy unparalleled comfort in the pinnacle of sophistication</p>
              <p><a class="btn btn-primary text-white btnn mainBtnn pointer" onClick={() => router.push('/reservations')}>Book Now</a></p>
            </div>
          </div>
        </div>
      </section>

      <BestPlace />

      <Footer />
    </>
  );
};

export default Rooms;
