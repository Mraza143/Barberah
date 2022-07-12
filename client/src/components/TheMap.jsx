import React,{useState , useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

function TheMap(props){
    const [cordinates , setCordinates] = useState([10,10]);
    const [lat, setLat] = useState(0);
    const [lang, setLang] = useState(0);
    const MyCustomMarker = () => <span class="material-icons">place</span>;
   
    useEffect(() => {
        setLat(props.latt)
        setLang(props.langg)
     }, [])
    return(
        
        <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals={true}
            bootstrapURLKeys={{key:'AIzaSyCLNX0Qokx5Fu3s8kqN1NAp3tABdIr8xzE'}}
            defaultZoom={16}
            center={[lat,lang]}
        >
            <MyCustomMarker
                lat={lat}
                lng={lang}

            />
        </GoogleMapReact>

    )
}

export default TheMap