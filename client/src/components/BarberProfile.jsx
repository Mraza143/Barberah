import React from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useState ,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getBarberDetailsAsync} from '../redux/barberDetailsSlice';



const BarberProfile = () => {
    //const [barber, setbarber]= useState({});
    const {id } = useParams(); 
    console.log(id)

    const dispatch = useDispatch();
	  const barberDetails = useSelector((state) => state.barberDetails);

    useEffect(()=>{

       dispatch(getBarberDetailsAsync({id}));

    }, [dispatch, id]);
    return (
        <div className="gradient-bg-welcome flex md:flex-row flex-col w-full justify-center items-center">
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
              
                <p className="    text-white text-base font-bold ">Experience: {barberDetails.experience} years</p>             
              <p className=" text-white text-base font-bold ">Ratings: {barberDetails.ratings} /10</p>
             
            </div>
            <img
              src={ barberDetails.imagePath}
              alt="nature"
              className="w-256 h-64 2xl:h-96 rounded-md shadow-lg object-cover"
            />
            <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
              <p className="text-[#37c7da] font-bold">{barberDetails.name}</p>
            </div>

          </div>
         
        </div>
        <div className="text-[#37c7da]">Appointments for this barber</div>
        </div>
        )};


export default BarberProfile;


/*

*/
    
