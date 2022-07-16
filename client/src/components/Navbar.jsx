import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BrowserRouter, Link as Link1 } from "react-router-dom";
import logo from "/images/logooo.png";
import profilePng from '/images/Profile.png'
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import { useState , useEffect } from "react";


const NavBarItem = ({ title,link, classprops }) => (
  <Link1 to={link} > 
  <li className={`hover:underline hover:text-[white] decoration-[#37c7da] decoration-2 mx-12 rounded-full cursor-pointer ${classprops}`}>{title}</li></Link1>
);


const Navbar = () => {
  const { user ,error, loading, isAuthenticated } = useSelector((state) => state.user)


  // const [boolLog,setboolLog]= useState(false)
  // const [name,setName]= useState("")
  const [link , setLink]=useState("")
  //const [foundUser,setfoundUser]= useState("")
  const [toggleMenu, setToggleMenu] = useState(false);
  // For User Profile
  const [isClicked, setIsClicked]=useState(false)
  //Modift this array for links of navbar
  const links =["AboutUs","Salons","login","ContactUs"] 

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     console.log(foundUser)
  //     setName(foundUser["user"]["name"])
  //     setLink(foundUser["user"]["avatar"]["url"])

  //     setboolLog(true)

  //   }
    
  // }, [isAuthenticated , loading]);

  return (

    <nav className="w-full flex md:justify-center justify-between items-center px-4 bg-black">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <Link1 to="/"><img src={logo}  alt="logo" className="w-20 cursor-pointer" /></Link1>
        
      </div>
      <ul className="text-[#c8c8c8] md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["About Us", "Salons" , "Login", "Trending" , "Contact Us"].map((item, index) => (
          <NavBarItem key={item + index} title={item} link={`/${links[index]}`} />
        ))}


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
            {["About Us", "Salons" , "Login",  "Contact Us"].map(
              (item, index) => <NavBarItem key={item + index} title={item} link={`/${links[index]}`} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
      {/* Logout Toggle and User Profile */}

{
  isAuthenticated && <>
   <div
        className="flex text-4xl items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
        onClick={()=>setIsClicked(!isClicked)}
      >
        <img
          className="rounded-full w-[2.5rem] h-[2.5rem] text-white text-sm"
          // src={user.avatar.url? user.avatar.url : profilePng}
          src={user?.avatar?.url}
          alt="user-profile"
        />
        <p className="flex items-center justify-center">
          <span className="text-gray-400 text-10 text-base mr-2">Hi,</span>{" "}
          <span className="text-gray-400 ml-1 text-10 text-lg">{user?.name}</span>
        </p>
        <MdKeyboardArrowDown className="text-gray-400 text-14" />
      </div>

  </>
}
      {isClicked && <UserProfile />}
     




      {/* ----------------- */}
    </nav>
  );
};

export default Navbar;