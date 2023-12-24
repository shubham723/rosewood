'use client'
import Link from 'next/link';
// import { useRouter } from 'next/router';
import React from 'react';

const Carosusel = ({ heading, menu }) => {
    // const router = useRouter();

    return (
        <section class="site-hero inner-page overlay" style={{ backgroundImage: 'url(images/rosewood3.jpeg)' }}>
            <div class="container">
                <div class="row site-hero-inner justify-content-center align-items-center">
                    <div class="col-md-10 text-center" data-aos="fade">
                        <h1 class="heading mb-3">{heading}</h1>
                        <ul class="custom-breadcrumbs mb-4">
                            <li className='mainClr pointer'>
                                <Link href='/' className='mainClr'>Home</Link>
                            </li>
                            <li>&bull;</li>
                            <li>{menu}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <a class="mouse smoothscroll" href="#next">
                <div class="mouse-icon">
                    <span class="mouse-wheel"></span>
                </div>
            </a>
        </section>
    );
};

export default Carosusel;
