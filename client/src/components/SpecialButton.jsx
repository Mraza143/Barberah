import React from "react";
import { Link } from "react-router-dom";

const SpecialButton = () => (
    <div className="gradient-bg-welcome flex w-full justify-center items-center pb-10 ">
        <Link to="/salons">
        <button
              type="button"
              onClick={()=>{}}
              className="mt-20 w-[250px] flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >

              <p className="text-white text-base font-semibold">
                Show All the barbers shop
              </p>
            </button>
            </Link>
    </div>

);

export default SpecialButton;