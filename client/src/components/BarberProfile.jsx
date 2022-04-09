import React from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useState ,useEffect} from "react";




const BarberProfile = () => {
    const [barber, setbarber]= useState({});
    const {id } = useParams(); 


    useEffect(()=>{
      axios
      .get("http://localhost:5000/api/barbers/details/" + id)
      .then(res=> setbarber(res.data))
      .catch(error=>console.log(error));
      
     
    }, []);
    console.log(barber);
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
        <div className="text-[#37c7da]">Appointments for this barber</div>
        </div>
        )};


export default BarberProfile;
    
