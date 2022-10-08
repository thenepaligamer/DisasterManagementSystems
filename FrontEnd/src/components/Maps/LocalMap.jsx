import "leaflet/dist/leaflet.css";
import { MapContainer, GeoJSON, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import localJson from "../../assets/geojson/local.min.json";
import latLong from "./latLong";

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




const LocalMap = (props) => {
   
    const localMark = props.eventData.map(data => {
        console.log(data.local)
        if(data.local in latLong){
            return (<IncidentMarker position={latLong[`${data.local}`]} key={data.id} eventData={data}/>)
        } 
    })
    console.log(localMark)
    

    return (
        <>
            <MapContainer style={{height: "60vh"}}
                center={[28, 84]}
                zoom={7}
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
