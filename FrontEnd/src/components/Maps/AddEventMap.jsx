import { useState } from "react";

// import districtUtil from "../utils/districts";

import "leaflet/dist/leaflet.css";
import {
    MapContainer,
    GeoJSON,
    TileLayer,
    Marker,
    Popup,
    useMap,
    useMapEvents,
} from "react-leaflet";
import latLong from "./latLong";

function LocationMarker(props) {
    const [position, setPosition] = useState(null);
    const [mapData, setMapData] = useState(null);
    const map = useMapEvents({
        click(e) {
            map.locate();
            const { lat, lng } = e.latlng;
            setPosition(e.latlng);
            console.log(e.latlng);
            fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
            )
                .then((res) => res.json())
                .then((data) => {
                    setMapData(data);
                    props.fillLocation(data);
                    props.latLong(e.latlng);
                });
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>
                <ul>
                    {/* <li>{mapData.county ? mapData.county : 'loading'}</li> */}{" "}
                    loading
                </ul>
            </Popup>
        </Marker>
    );
}

const LocalMap = (props) => {
    return (
        <>
            <MapContainer
                style={{ height: "100vh" }}
                center={[28, 84]}
                zoom={7}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker
                    fillLocation={props.fillLocation}
                    latLong={props.latLong}
                />
            </MapContainer>
        </>
    );
};

export default LocalMap;
