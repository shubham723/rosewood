"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const BestPlace = () => {
    const router = useRouter();

    return (
        <section class="section bg-image overlay" style={{ backgroundImage: 'url(images/hero_4.jpg)' }}>
            <div class="container" style={{ bottom: '90px' }} >
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left" data-aos="fade-up">
                        <h2 class="text-white font-weight-bold">A Best Place To Stay. Reserve Now!</h2>
                    </div>
                    <div class="col-12 col-md-6 text-center text-md-right" data-aos="fade-up" data-aos-delay="200">
                        <a class="btn btn-outline-white-primary py-3 text-white px-5" onClick={() => router.push('/reservations')}>Reserve Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestPlace;
