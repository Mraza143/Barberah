import React from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {getSalonDetailsAsync} from '../redux/salonDetailsSlice';
import { getBarbersSalonAsync } from "../redux/barberSlice";


const ShopCard1 = (props)=> {
  let text = "/specificBarber/"  + props.id+ "/"+ props.name + "/" +props.sname;
  
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
        <div className="flex flex-col  justify-center items-center display-flex justify-start w-full mb-6 p-2">       
            <p className="text-white text-base">Rating: {props.ratings} / 10</p>         
          <p className="text-white text-base">Experience: {props.experience} years</p>
          <p className="text-white text-base">Sample Hair style</p>
         
        </div>
        <img
          src={ props.imagePath}
          alt="nature"
          className="w-64 h-32 2xl:h-96 rounded-md shadow-lg object-cover"
        />

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{props.name}</p>
        </div>
     
      </div>
    </div>
    </Link>


  );
};


const SpecificSalon = () => {
    const {id ,name} = useParams(); 
    const dispatch = useDispatch();
	  const salonDetails = useSelector((state) => state.salonDetails);
    const barbers = useSelector((state) => state.barbers);
    const sname= salonDetails.name;
    


    useEffect(()=>{
      dispatch(getSalonDetailsAsync({id}));
      dispatch(getBarbersSalonAsync({name}));

    }, [dispatch,id,name]);
    return (
        <div className="gradient-bg-welcome flex w-full justify-center items-center">
        <div className=" m-4 flex flex-1
          2xl:min-w-[750px]
          2xl:max-w-[800px]
          sm:min-w-[470px]
          sm:max-w-[500px]
          min-w-full
          flex-col p-3 rounded-md hover:shadow-2xl"
        >
          <div className="flex flex-col justify-center items-center w-full mt-3">
            <div className=" flex flex-col  justify-center items-center w-full mb-6 p-10 s">
              
                <p className="    text-white text-base font-bold ">Location: {salonDetails.location}</p>             
              <p className=" text-white text-base font-bold ">Timings: {salonDetails.timings} </p>
             
            </div>
            <img
              src={salonDetails.imagePath}
              alt="nature"
              className="w-full h-128 2xl:h-96 rounded-md shadow-lg object-cover"
            />
            <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
              <p className="text-[#37c7da] font-bold">{salonDetails.name}</p>
            </div>
            <div className="mt-20 flex flex-wrap  justify-center items-center ">
            {barbers.map((barber, i) => (
            <ShopCard1 key={i} id={barber._id} ratings={barber.ratings} imagePath={barber.imagePath} name= {barber.name}  experience={barber.experience} sname={sname} />))}
            </div>
          </div>
        </div>
        </div>
        )};


export default SpecificSalon;
    
