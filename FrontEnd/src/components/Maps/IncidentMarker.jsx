import { Marker, Popup } from "react-leaflet";

const IncidentMarker = (props) => {
    // console.log(props);
    return (
        <>
        <Marker position={props.position}>
            <Popup>
                <ul>
                    <li>{props.eventData.title}</li>
                    <li>{props.eventData.local}</li>
                </ul>
            </Popup>
        </Marker>
        </>
    )
}

export default IncidentMarker;
