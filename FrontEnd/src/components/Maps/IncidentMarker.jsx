import { Marker, Popup } from "react-leaflet";

const IncidentMarker = (props) => {
    console.log(props);
    return (
        <>
            <Marker position={[props.eventData.lat, props.eventData.long]}>
                <Popup>
                    <ul>
                        <li>
                            {" "}
                            <a href="/view-events">{props.eventData.title}</a>
                        </li>
                        <li>{props.eventData.local}</li>
                    </ul>
                </Popup>
            </Marker>
        </>
    );
};

export default IncidentMarker;
