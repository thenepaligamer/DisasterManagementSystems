import { Marker, Popup } from "react-leaflet";

const IncidentMarker = (props) => {
    // console.log(props);
    return (
        <>
        <Marker position={props.position}>
            <Popup>hello</Popup>
        </Marker>
        </>
    )
}

export default IncidentMarker;
