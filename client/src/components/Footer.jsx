import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import logo from "/images/logooo.png";
import "./Footer.css";

const Footer = () => (
  <div id="Contact Us" className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col my-4">
      <div className="flex flex-1 flex-wrap sm:mt-0 mt-5 w-full">
        <img src={logo} alt="logo" className="w-32 h-20 flex flex-[0.2]" />
        <div className="footer">
          <ul>
            <li>
              <a className="hover:bg-[#2546bd] text-white text-base text-center mx-2 cursor-pointer">About Us</a>
            </li>
            <li>
            <a className="hover:bg-[#2546bd] text-white text-base text-center mx-2 cursor-pointer">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:bg-[#2546bd] text-white text-base text-center mx-2 cursor-pointer">Terms of Service</a>
            </li>
            <li>
              <a className="hover:bg-[#2546bd] text-white text-base text-center mx-2 cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    

    <div className="sm:w-[95%] w-full h-[0.25px] bg-gray-400 mt-5 " />
    

    <div className="sm:w-[95%] w-full flex justify-between items-center mt-3 font">
        <p className="text-white text-left text-xs"> &#169;2022 Barbera Inc. All rights reserved</p>
        <div className="flex justify-center items-center flex-col mt-5">
          <p className="text-white text-sm text-center">Come Join us and Hear for the Unexpected Miracle</p>
          <p className="text-white text-sm text-center font-medium mt-2">info@barbera.com</p>
        </div>
        <div className="text-white text-right text-xs">
          <a href="www.facebook.com" className="px-4"><FacebookIcon fontSize="large"/></a>
          <a href="www.instagram.com" className="px-4"><InstagramIcon fontSize="large"/></a>
          <a href="www.twitter.com" className="px-4"><TwitterIcon fontSize="large"/></a>
        </div>

    </div>
  </div>

  
);

export default Footer;