'use client'
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  
  return (
    <footer class="section footer-section">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-3 mb-5">
            <ul class="list-unstyled link">
              <li><a className='pointer' onClick={() =>router.push('/terms-of-use')}>Terms &amp; Conditions</a></li>
              <li><a className='pointer' onClick={() =>router.push('privacy-policy')}>Privacy Policy</a></li>
            </ul>
          </div>
          <div class="col-md-3 mb-5">
            <ul class="list-unstyled link">
              <li><a className='pointer' onClick={() =>router.push('/rooms')}>The Rooms &amp; Suites</a></li>
              <li><a className='pointer' onClick={() =>router.push('/about')}>About Us</a></li>
              <li><a className='pointer' onClick={() =>router.push('/reservations')}>Contact Us</a></li>
              <li><a className='pointer' onClick={() =>router.push('/events')}>Events</a></li>
            </ul>
          </div>
          <div class="col-md-6 mb-5 pr-md-5 contact-info">
            <p><span class="d-flex align-center"><FaLocationDot /> <span className='ml-2'>Address: </span> </span> <span> Sco 7-8, Shri Ganesh Complex <br /> Zirakpur, Punjab 140603</span></p>
            <p><span class="d-flex align-center"><FaPhoneAlt /> <span className='ml-2'> Phone: </span> </span> <span> +91 7986612608 | +91 7347372702 | +91 9878459791</span></p>
            <p><span class="d-flex align-center"><MdEmail /> <span className='ml-2'> Email: </span> </span> <span> hotelrosewood956@gmail.com</span></p>
          </div>
          {/* <div class="col-md-3 mb-5">
            <p>Sign up for our newsletter</p>
            <form action="#" class="footer-newsletter">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email..." />
                <button type="submit" class="btn"><FaPaperPlane /></button>
              </div>
            </form>
          </div> */}
        </div>
        <div class="row pt-5">
          <p class="col-md-6 text-left">
          Copyright &copy; {new Date().getFullYear()} All rights reserverd
          </p>
            
          {/* <p class="col-md-6 text-right social d-flex">
            <FaFacebook />
            <FaYoutube className='ms-3ll' />
            <FaInstagram className='ms-3' />
            <a href="#"><span class="fa fa-linkedin"></span></a>
            <a href="#"><span class="fa fa-vimeo"></span></a>
          </p> */}
        </div>
      </div>
    </footer> 
  )
}
export default Footer;
