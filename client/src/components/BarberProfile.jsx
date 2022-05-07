import React from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useState ,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllBarbersDetails } from "../redux/actions/barberDetailsAction";
import { getAllAppointments } from "../redux/actions/appointmentAction";
//import {getBarberDetailsAsync} from '../redux/barberDetailsSlice';
//import { getAppointmentsAsync } from "../redux/appointmentSlice";

const ShopCard1 = (props)=> {

  
  return (

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
            <p className="text-white text-base">Date: {props.date}</p>         
          <p className="text-white text-base">Customer Name: {props.customerName} </p>

         
        </div>

     
      </div>
    </div>

  );
};


const BarberProfile = () => {
    //const [barber, setbarber]= useState({});
    const {id ,name ,sname} = useParams(); 
    console.log(id)

    const dispatch = useDispatch();
	  const barber = useSelector((state) => state.barber);
    const appointments = useSelector((state)=>state.appointments);

    useEffect(()=>{

       dispatch(getAllBarbersDetails({id}));
       dispatch(getAllAppointments({id,name,sname}))
       

    }, [dispatch, id]);
    console.log(appointments)
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
              
                <p className="    text-white text-base font-bold ">Experience: {barber.experience} years</p>             
              <p className=" text-white text-base font-bold ">Ratings: {barber.ratings} /10</p>
             
            </div>
            <img
              src={ barber.imagePath}
              alt="nature"
              className="w-256 h-64 2xl:h-96 rounded-md shadow-lg object-cover"
            />
            <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
              <p className="text-[#37c7da] font-bold">{barber.name}</p>
            </div>

          </div>
         
        </div>
        <div className="text-[#37c7da]">Appointments for this barber
        {appointments.map((barber, i) => (
            <ShopCard1 key={i}  date={barber.date}  customerName={barber.customerName} />))}


        </div>
        </div>
        )};


export default BarberProfile;


/*

*/
    
