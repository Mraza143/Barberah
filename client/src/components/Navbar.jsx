import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
//import { Link } from "react-router-dom";<Link to='#shops' smooth>
import { BrowserRouter, Link as Link1 } from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";

import logo from "/images/logoo.png";


const NavBarItem = ({ title,link, classprops }) => (
  <Link to={link} smooth > 
  <li className={`hover:bg-[#2546bd] mx-12 rounded-full cursor-pointer ${classprops}`}>{title}</li></Link>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <BrowserRouter>
    <nav className="w-full flex md:justify-center justify-between items-center px-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <Link to="/"><img src={logo}  alt="logo" className="w-20 cursor-pointer" /></Link>
        
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["About Us", "Services", "Salons", "Contact Us"].map((item, index) => (
          <NavBarItem key={item + index} title={item} link={`#${item}`} />
        ))}
        {/* <li className="bg-[#2952e3]  px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}

        <Link1 to="/login">
        <li className="bg-[#2952e3]  px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
        </Link1>

      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
    </BrowserRouter>
  );
};

export default Navbar;