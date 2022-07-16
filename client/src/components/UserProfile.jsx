import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import profilePng from '/images/Profile.png'
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import "./userProfile.css";

import {logout} from "../redux/actions/userAction"
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const UserProfile = () => {
  const dispatch=useDispatch()
  const alert=useAlert()
  const [isClicked, setIsClicked] = useState(true);
  const { user } = useSelector((state) => state.user)

  const handleClick_LogoutUser = () => {
    setIsClicked(!isClicked);
    dispatch(logout())
    alert.success("Logout Successfully")

    setTimeout(() => {
      window.location.reload
    }, 2000); //miliseconds

  };


  return (
    <>
      {isClicked && (
        <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#f1eee9] p-4 rounded-lg w-80 z-50 mt-4 border-solid border-2 border-[#c9c9c9]">
          <div className="flex justify-between items-center px-0">
            <p className="font-semibold text-2-xl dark:text-gray-200">
              User Profile
            </p>
            <div className="hover:scale-150">
            <button
              onClick={()=>setIsClicked(!isClicked)}
              className="text-2xl p-3 hover:drop-shadow-xl bg-light-gray border-[50%]"
              type="button"
              icon={<MdOutlineCancel />}
              // bgHoverColor="light-gray"
              // size="2xl"
              // borderRadius="50%"
            >
              <MdOutlineCancel />
            </button>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-2 border-color border-b-1 ">
            <img
              className="rounded-full h-20 w-20"
              // src={profilePng}
              src={user?.avatar?.url}
              // src={link }
              alt="user-profile"
            />
            <div>
              <p className="font-semibold text-xl dark:text-gray-200">
                {user?.name}
                </p>
            
              <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
                {user?.email}
              </p>
            </div>
          </div>
          <div>

            {
              user.role === "salonowner" && <>
            <Link to="/salonowner/dashboard"
            onClick={()=>setIsClicked(!isClicked)}
            className="flex gap-5 mt-6 border-b-1 border-color p-2 hover:bg-[#37c7da] rounded hover:text-white cursor-pointer">
              <button
                type="button"
                className=" text-xl rounded-lg p-2"
              >
                <DashboardIcon /> 

              </button>
              <div className="">
                <p className="font-semibold dark:text-gray-200 ">Dashboard</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {" "}
                  Admin Settings
                </p>
              </div>
            </Link>
  
              </>
            }
            
           
          </div>

          <div className="mt-5 flex justify-center">
            <button
              onClick={handleClick_LogoutUser}
              className="btn-64"
            >
            <span>
              Logout
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;