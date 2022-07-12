import React from "react";
import { Link } from "react-router-dom";
import "./SpecialButton.css"

const SpecialButton = () => (
    <div className="bg-white flex w-full justify-center items-center pb-10 mt-5">
        <Link to="/salons">
        <button
              type="button"
              onClick={()=>{}}
              className="mt-20 w-[275px] flex flex-row justify-center items-center p-3 rounded-full cursor-pointer cta"
            >

              <span className="text-black text-base font-semibold">
                SHOW ALL BARBERS
              </span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
            </button>
            </Link>
    </div>

);

export default SpecialButton;