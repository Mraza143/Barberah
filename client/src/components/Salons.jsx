import axios from "axios";
import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getSalonsAsync } from "../redux/salonSlice";


const ShopCard = ({_id, location,  timings, imagePath ,name})=> {
  let text = "/specificSalon/"  + _id + "/"+ name;
  return (
    
    <Link to={text}>
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[350px]
      2xl:max-w-[400px]
      sm:min-w-[170px]
      sm:max-w-[200px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${location}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">Location: {location}</p>
          </a>
         
          <p className="text-white text-base">Timings: {timings} ETH</p>
         
        </div>
        <img
          src={ imagePath}
          alt="nature"
          className="w-64 h-32 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{name}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

const Salons = (props) => {

  const dispatch = useDispatch();
	const salons = useSelector((state) => state.salons);
  useEffect(()=>{

    dispatch(getSalonsAsync())
  },[dispatch])

  return (
    <div className="gradient-bg-welcome" id="Salons">
    
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">

          <h3 className="mt-12 text-[#37c7da] text-3xl text-center my-2 font-bold">
            Barber's Shops
          </h3>
          <h3 className="py-12 text-[#37c7da] bold text-3xl text-center my-2">
            Connect your account to make a appointment with the barber of your choice!
          </h3>


        <div className="flex flex-wrap  justify-center items-center mt-10">
          
        {salons.filter((transaction,id)=>id<props.total).map((transaction, i) => (
            <ShopCard key={i} {...transaction} />))}           
        </div>
       
      </div>
      </div>      
    </div>
  );
};

export default Salons;

//{salons.filter((transaction,id)=>id<props.total).map((salon, i) => (
//  <ShopCard key={i} salon ={salon} />