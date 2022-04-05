import React from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useState ,useEffect} from "react";

const SpecificSalon = () => {
    const [salons, setSalons]= useState([]);
    const {id} = useParams();
    //const url= "http://localhost:5000/api/salons/" +id ;
    useEffect(()=>{
      axios
      .get("http://localhost:5000/api/salons/" + id)
      .then(res=> setSalons(res.data))
      .catch(error=>console.log(error));
    })
    return (
        <div className="gradient-bg-welcome flex w-full justify-center items-center">
        <div className=" m-4 flex flex-1
          2xl:min-w-[450px]
          2xl:max-w-[500px]
          sm:min-w-[270px]
          sm:max-w-[300px]
          min-w-full
          flex-col p-3 rounded-md hover:shadow-2xl"
        >
          <div className="flex flex-col justify-center items-center w-full mt-3">
            <div className=" justify-center items-center w-full mb-6 ml-48 p-2">
              
                <p className="text-white text-base font-bold">Location: {salons.location}</p>
             
              <p className="text-white text-base font-bold">Timings: {salons.timings} ETH</p>
             
            </div>
            <img
              src={ salons.imagePath}
              alt="nature"
              className="w-128 h-64 2xl:h-96 rounded-md shadow-lg object-cover"
            />
            <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
              <p className="text-[#37c7da] font-bold">{salons.name}</p>
            </div>
          </div>
        </div>
        </div>
      );
    };
    
  
export default SpecificSalon;