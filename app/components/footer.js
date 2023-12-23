import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer class="section footer-section">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-3 mb-5">
            <ul class="list-unstyled link">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
             <li><a href="#">Rooms</a></li>
            </ul>
          </div>
          <div class="col-md-3 mb-5">
            <ul class="list-unstyled link">
              <li><a href="#">The Rooms &amp; Suites</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Restaurant</a></li>
            </ul>
          </div>
          <div class="col-md-3 mb-5 pr-md-5 contact-info">
            <p><span class="d-flex align-center"><FaLocationDot /> <span className='ml-2'>Address: </span> </span> <span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</span></p>
            <p><span class="d-flex align-center"><FaPhoneAlt /> <span className='ml-2'> Phone: </span> </span> <span> (+1) 435 3533</span></p>
            <p><span class="d-flex align-center"><MdEmail /> <span className='ml-2'> Email: </span> </span> <span> info@domain.com</span></p>
          </div>
          <div class="col-md-3 mb-5">
            <p>Sign up for our newsletter</p>
            <form action="#" class="footer-newsletter">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email..." />
                <button type="submit" class="btn"><FaPaperPlane /></button>
              </div>
            </form>
          </div>
        </div>
        <div class="row pt-5">
          <p class="col-md-6 text-left">
          Copyright &copy; {new Date().getFullYear()} All rights reserverd
          </p>
            
          <p class="col-md-6 text-right social d-flex">
            <FaFacebook />
            <FaYoutube className='ms-3ll' />
            <FaInstagram className='ms-3' />
            <a href="#"><span class="fa fa-linkedin"></span></a>
            <a href="#"><span class="fa fa-vimeo"></span></a>
          </p>
        </div>
      </div>
    </footer> 
  )
}
export default Footer;
