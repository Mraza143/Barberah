import React from "react";
import { useParams} from "react-router-dom";
import { useState ,useEffect} from "react";
import {GoogleMap , withScriptjs , withGoogleMap} from "react-google-maps";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllBarberss } from "../redux/actions/barberAction";
import { getAllSalonDetails } from "../redux/actions/salonDetailsAction";

function Map(){
  return (<GoogleMap defaultZoom={10}  defaultCenter={{lat:24.8608, lng : 67.0104}}/>
  );
}
const  WrappedMap = withScriptjs(withGoogleMap(Map));


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
    const {id , name} = useParams(); 

    const dispatch = useDispatch();
	  const {salon} = useSelector((state) => state.salon);
    const {barbers} = useSelector((state) => state.barbers);

    const sname= salon.name;
    


    useEffect(()=>{
      dispatch(getAllSalonDetails(id));
      dispatch(getAllBarberss(name));

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
              
                <p className="    text-white text-base font-bold ">Location: {salon.location}</p>             
              <p className=" text-white text-base font-bold ">Timings: {salon.timings} </p>
             
            </div>
            <img
              src={salon.imagePath}
              alt="nature"
              className="w-full h-128 2xl:h-96 rounded-md shadow-lg object-cover"
            />
            <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
              <p className="text-[#37c7da] font-bold">{salon.name}</p>
            </div>
            <div style={{width  :'70vw', height: '50vh'}} className=" mt-20 justify-center items-center ">
            <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCLNX0Qokx5Fu3s8kqN1NAp3tABdIr8xzE`}
            loadingElement = {<div style={{height : "100%"}}/>}
            containerElement = {<div style={{height : "100%"}}/>}
            mapElement = {<div style={{height : "100%"}}/>}
            />
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
    
