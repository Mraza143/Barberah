import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import profilePng from '/images/Profile.png'

import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const UserProfile = () => {
  const [isClicked, setIsClicked] = useState(true);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked && (
        <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg dark:text-gray-200">
              User Profile
            </p>
            <button
              onClick={handleClick}
              className="text-2xl p-3 hover:drop-shadow-xl "
              type="button"
              icon={<MdOutlineCancel />}
              bgHoverColor="light-gray"
              size="2xl"
              borderRadius="50%"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
            <img
              className="rounded-full h-24 w-24"
              src={profilePng}
              alt="user-profile"
            />
            <div>
              <p className="font-semibold text-xl dark:text-gray-200">
                {" "}
                Shayan Jamil{" "}
              </p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                Software Engineer{" "}
              </p>
              <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
                {" "}
                shayanjamil500@gmail.com{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
              <button
                type="button"
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              ></button>
              <div>
                <DashboardIcon /> 
                <p className="font-semibold dark:text-gray-200 ">Dashboard</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {" "}
                  Admin Settings
                </p>
              </div>
            </div>
            <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
              <button
                type="button"
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              ></button>
              <div>
                <AccountBoxIcon />
                <p className="font-semibold dark:text-gray-200 ">My Profile</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {" "}
                  Account Settings
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={handleClick}
              className="p-3 w-full hover:drop-shadow-xl hover:bg-white hover:bg-[#37c7da] hover:text-white"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;