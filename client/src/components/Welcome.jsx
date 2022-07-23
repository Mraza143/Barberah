import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import imageOne from "/images/b5.jpg";
import imageTwo from "/images/b4.jpg";
import imageThree from "/images/b3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center " id="About Us">
      <div className="flex md:flex-row flex-col  items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Find the best Barber <br /> In Your area
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            No need to waste time in barber's shop now..
            Make a booking and visit the shop in your desired time
          </p>
          
            


          <div className=" grid sm:grid-cols-3 grid-cols-2 w-full mt-20">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliable
            </div>
            <div className={companyCommonStyles}>Scalable</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Efficient
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Quick
            </div>
            <div className={companyCommonStyles}>No Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Secure
            </div>
          </div>
          <div className="mt-24">
          <button
              type="button"
              onClick={()=>{}}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
            </div>
          
        </div>
        

        <div className="flex flex-col flex-1 items-center justify-center w-full lg:pl-48  mt-10">

          <div className="p-5 sm:w-96 sm:mb-12 md:py-2 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <Carousel  autoPlay={true}  interval={2000} infiniteLoop={true} dynamicHeight={false} width={300} >
                <div>
                    <img src={imageOne} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={imageTwo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={imageThree} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          </div>
          


      </div>
      </div>
      </div>

  );
};

export default Welcome;


/*
        <div className="flex flex-col flex-1 items-center justify-center w-full lg:pl-48  mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl  h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  dffdsd
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={()=>{}} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={()=>{}} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={()=>{}} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={()=>{}} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

 
             (
                <button
                  type="button"
                  onClick={()=>{}}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>

          </div>
        </div>
      </div>
    </div>





              <div className="p-3 flex justify-end items-start flex-col rounded-xl  h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
            <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <BsScissors fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-semibold  text-lg">
                  Best Barbers in the city
                </p>
                <p className="text-white font-light text-sm mt-1">
                  Karachi ,Pakistan
                </p>
              </div>
            </div>
          </div>


*/