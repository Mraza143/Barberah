import React from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useState ,useEffect} from "react";


const ShopCard = ({imagePath , name,  experience , ratings})=> {
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
            <p className="text-white text-base">Rating: {ratings} / 10</p>         
          <p className="text-white text-base">Experience: {experience} years</p>
          <p className="text-white text-base">Sample Hair style</p>
         
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

  );
};



const SpecificSalon = () => {
    const [salons, setSalons]= useState({});
    const [barbers, setbarbers]= useState([]);
    const {id ,name} = useParams(); 


    useEffect(()=>{
      //axios
      //.get("http://localhost:5000/api/barbers/" + name)
      //.then(res=> setbarbers(res.data))
      //.catch(error=>console.log(error));
      Promise.all([
        fetch("http://localhost:5000/api/barbers/" + name),
        fetch("http://localhost:5000/api/salons/" + id)
      ])
      .then(async([res1, res2]) => {
        const a = await res1.json();
        setbarbers(a)
        const b = await res2.json();
        setSalons(b)
        
      })
      .catch(error => {
        console.log(error);
      });
    }, []);
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
              
                <p className="    text-white text-base font-bold ">Location: {salons.location}</p>             
              <p className=" text-white text-base font-bold ">Timings: {salons.timings} </p>
             
            </div>
            <img
              src={ salons.imagePath}
              alt="nature"
              className="w-full h-128 2xl:h-96 rounded-md shadow-lg object-cover"
            />
            <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
              <p className="text-[#37c7da] font-bold">{salons.name}</p>
            </div>
            <div className="mt-20 flex flex-wrap  justify-center items-center ">
            {barbers.map((barber, i) => (
            <ShopCard key={i} {...barber} />))}
            </div>
          </div>
        </div>
        </div>
        )};


export default SpecificSalon;
    
