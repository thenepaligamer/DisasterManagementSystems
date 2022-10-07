import "leaflet/dist/leaflet.css";
import { MapContainer, GeoJSON, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import localJson from "../../assets/geojson/local.min.json";

import IncidentMarker from "./IncidentMarker";

import { useState } from "react";

// function LocationMarker() {
//     const [position, setPosition] = useState(null)
//     const map = useMapEvents({
//       click(e) {
//         map.locate();
//         setPosition(e.latlng)
//         map.flyTo(e.latlng, map.getZoom())
//       },
//     })
  
//     return position === null ? null : (
//       <Marker position={position}>
//         <Popup>You are here</Popup>
//       </Marker>
//     )
//   }

const localLatLong = {
    "Pancheshwor Rural Municipality": [27.5, 83.5],
    "Annapurna Rural Municipality": [26.5, 87.5],
}


const LocalMap = (props) => {
    // let localMark = [];
    // for(let data of props.eventData){
    //     console.log(data.local)
    //     if(data.local in localLatLong){
    //      localMark.push(<IncidentMarker position={localLatLong[`${data.local}`]} key={data.local} />)
    //     }
    // }
    const localMark = props.eventData.map(data => {
        console.log(data.local)
        if(data.local in localLatLong){
            return (<IncidentMarker position={localLatLong[`${data.local}`]} key={data.local} />)
        } 
    })
    console.log(localMark)
    

    return (
        <>
            <MapContainer style={{height: "60vh"}}
                center={[28, 84]}
                zoom={5}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={localJson}  />

              { localMark}
            </MapContainer>
        </>
    );
};

export default LocalMap;
