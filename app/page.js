'use client'
import Image from 'next/image';
import Availability from './components/availability';
import BestPlace from './components/bestPlace';
import Footer from './components/footer';
import CollapsibleExample from './components/header';

export default function Home() {
  return (
    <>
      <CollapsibleExample />
      {/* <!-- END head --> */}

      <section class="site-hero overlay" style={{ backgroundImage: 'url(images/rosewood.jpeg)' }}>
        <div class="container">
          <div class="row site-hero-inner justify-content-center align-items-center">
            <div class="col-md-10 text-center" data-aos="fade-up">
              <span class="custom-caption text-uppercase text-white d-block  mb-3">Welcome To 5 <span class="fa fa-star text-primary"></span>   Hotel</span>
              <h1 class="heading">A Best Place To Stay</h1>
            </div>
          </div>
        </div>

        <a class="mouse smoothscroll" href="#next">
          <div class="mouse-icon">
            <span class="mouse-wheel"></span>
          </div>
        </a>
      </section>
      {/* <!-- END section --> */}

      <Availability />

      <section class="py-5 bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
              <figure class="img-absolute">
                <img src="images/food-1.jpg" alt="Image" class="img-fluid" />
              </figure>
              <img src="images/room1.jpeg" alt="Image" class="img-fluid rounded" />
            </div>
            <div class="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
              <h2 class="heading">Welcome!</h2>
              <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><a href="#" class="btn btn-primary text-white py-2 mr-3  btnn mainBtnn">Learn More</a> <span class="mr-3 font-family-serif"></span></p>
            </div>

          </div>
        </div>
      </section>

      <section class="section mb-5">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading" data-aos="fade-up">Rooms &amp; Suites</h2>
              <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <a href="#" class="room">
                <figure class="img-wrap">
                  <img src="/images/room5.jpeg" alt="Free website template" class="img-fluid mb-3" width="100" height="100" style={{ width: '100%', }} />
                </figure>
                <div class="p-3 text-center room-info">
                  <h2>Single Room</h2>
                  <span class="text-uppercase letter-spacing-1 mainClr">90$ / per night</span>
                </div>
              </a>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
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

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
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

      <section class="section bg-image overlay" style={{ backgroundImage: "url('images/rosewood.jpeg')" }}>
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading text-white" data-aos="fade">Our Restaurant Menu</h2>
              <p class="text-white" data-aos="fade" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          <div class="food-menu-tabs" data-aos="fade">
            {/* <ul class="nav nav-tabs mb-5" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active letter-spacing-2 mainClr" id="mains-tab" data-toggle="tab" href="#mains" role="tab" aria-controls="mains" aria-selected="true">Mains</a>
              </li>
              <li class="nav-item">
                <a class="nav-link letter-spacing-2" id="desserts-tab" data-toggle="tab" href="#desserts" role="tab" aria-controls="desserts" aria-selected="false">Desserts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link letter-spacing-2" id="drinks-tab" data-toggle="tab" href="#drinks" role="tab" aria-controls="drinks" aria-selected="false">Drinks</a>
              </li>
            </ul> */}
            <div class="tab-content py-5" id="myTabContent">


              <div class="tab-pane fade show active text-left" id="mains" role="tabpanel" aria-labelledby="mains-tab">
                <div class="row">
                  <div class="col-md-6">
                    <div class="food-menu mb-5">
                      <span class="d-block h4 mb-3 mainClr">$20.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Murgh Tikka Masala</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block h4 mb-3 mainClr">$35.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Fish Moilee</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block h4 mb-3 mainClr">$15.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Safed Gosht</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="food-menu mb-5">
                      <span class="d-block h4 mb-3 mainClr">$10.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">French Toast Combo</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block h4 mb-3 mainClr">$8.35</span>
                      <h3 class="text-white"><a href="#" class="text-white">Vegie Omelet</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block h4 mb-3 mainClr">$22.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Chorizo &amp; Egg Omelet</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                </div>


              </div>
              {/* <!-- .tab-pane --> */}

              <div class="tab-pane fade text-left" id="desserts" role="tabpanel" aria-labelledby="desserts-tab">
                <div class="row">
                  <div class="col-md-6">
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$11.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Banana Split</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$72.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Sticky Toffee Pudding</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$26.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Pecan</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$42.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Apple Strudel</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$7.35</span>
                      <h3 class="text-white"><a href="#" class="text-white">Pancakes</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$22.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Ice Cream Sundae</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .tab-pane --> */}
              <div class="tab-pane fade text-left" id="drinks" role="tabpanel" aria-labelledby="drinks-tab">
                <div class="row">
                  <div class="col-md-6">
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$32.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Spring Water</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$14.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Coke, Diet Coke, Coke Zero</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$93.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Orange Fanta</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$18.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Lemonade, Lemon Squash</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$38.35</span>
                      <h3 class="text-white"><a href="#" class="text-white">Sparkling Mineral Water</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div class="food-menu mb-5">
                      <span class="d-block text-primary h4 mb-3">$69.00</span>
                      <h3 class="text-white"><a href="#" class="text-white">Lemon, Lime &amp; Bitters</a></h3>
                      <p class="text-white text-opacity-7">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .tab-pane --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- END section --> */}



      <section class="section blog-post-entry bg-light mb-5">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-md-7">
              <h2 class="heading" data-aos="fade-up">Events</h2>
              <p data-aos="fade-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="100">

              <div class="media media-custom d-block mb-4 h-100">
                <a href="#" class="mb-4 d-block"><img src="images/event1.jpeg" alt="Image placeholder" class="img-fluid" /></a>
                <div class="media-body">
                  <span class="meta-post">February 26, 2018</span>
                  <h2 class="mt-0 mb-3"><a href="#">Travel Hacks to Make Your Flight More Comfortable</a></h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>

            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="200">
              <div class="media media-custom d-block mb-4 h-100">
                <a href="#" class="mb-4 d-block"><img src="images/event2.jpeg" alt="Image placeholder" class="img-fluid" /></a>
                <div class="media-body">
                  <span class="meta-post">February 26, 2018</span>
                  <h2 class="mt-0 mb-3"><a href="#">5 Job Types That Aallow You To Earn As You Travel The World</a></h2>
                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="300">
              <div class="media media-custom d-block mb-4 h-100">
                <a href="#" class="mb-4 d-block"><img src="images/event5.jpeg" alt="Image placeholder" class="img-fluid" /></a>
                <div class="media-body">
                  <span class="meta-post">February 26, 2018</span>
                  <h2 class="mt-0 mb-3"><a href="#">30 Great Ideas On Gifts For Travelers</a></h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. t is a paradisematic country, in which roasted parts of sentences.</p>
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
}
