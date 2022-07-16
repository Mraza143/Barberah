import axios from "axios";
import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
//import { getSalonsAsync } from "../redux/salonSlice";
//import { getAllBarberss } from '../redux/actions/barberAction'
import { getAllSalons } from "../redux/actions/salonAction";
import "./Salons.css"


const ShopCard = ({_id, location,  timings, images ,name})=> {
  let text = "/specificSalon/"  + _id + "/"+ name;
  return (
    
    <Link to={text}>
    <div className="my-4 mx-6"
    >

      <div class="card">
        <div class="card-img">
          <img src={images[0].url}></img>
        </div>
        <div class="card-info">
          <p class="text-title">{name}</p>
          <p class="text-body">{location}</p>
          <p class="text-body">{timings}</p>
          </div>
          <div class="btn">
            <a class="fancy" href={`https://ropsten.etherscan.io/address/${location}`}>
        <span class="top-key"></span>
        <a class="text">Book Now</a>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
            </a> 
          </div>
        </div>
  </div>
      {/*<div className="flex flex-col items-center w-full mt-3">
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
      </div>*/}
    </Link>
  );
};

const Salons = (props) => {

  const dispatch = useDispatch();
	const {salons} = useSelector((state) => state.salons);
  useEffect(()=>{

    dispatch(getAllSalons())
  },[dispatch])

  return (
    <div className="bg-white" id="Salons" >
    
    <div className="flex w-full justify-center items-center 2xl:px-20 bg-white">
      <div className="flex flex-col md:p-12 py-4 px-4">

          <h3 className="mt-2 text-black text-3xl text-center font-bold">
            Barber's Shops
          </h3>
          <h3 className="py-2 text-black bold text-xl text-center my-2">
            Connect your account to make a appointment with the barber of your choice!
          </h3>


        <div className="flex flex-wrap mt-6 justify-around">
          
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