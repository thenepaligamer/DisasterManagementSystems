import { useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";

import useDistrictComponent from "../../hooks/districtComponent";
import allDistricts from "../../utils/districts";
import localBodies from "../../utils/localBodies";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

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

import AddEventMap from "../Maps/AddEventMap";

import DisasterImage from "../../assets/disaster.png";

export default function AddEvent() {
    // const districtComponent = useDistrictComponent();
    const { isLoggedIn } = useSelector((store) => store.adminAuth);
    const [latlng, setLatlng] = useState({ lat: 28, lng: 84 });
    const [isLocationSet, setIsLocationSet] = useState(true);
    const [ eventLocation, setEventLocation] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    function fillLocation( location){
        console.log(location);
        setEventLocation(location.address);
    }

    function latLong(latlong){
        setLatlng(latlong);
        console.log(latlong);
    }

    async function submitted(e) {
        e.preventDefault();
        const {
            title,
            province,
            district,
            local,
            type,
            description,
            estloss,
            death,
            injured,
            missing,
            lat,
            long
        } = e.target;
        if((province.value || district.value || local.value) !== "Select on Map"){
        setIsLocationSet(true);
        const formData = new URLSearchParams();
        formData.append("title", title.value);
        formData.append("province", province.value);
        formData.append("district", district.value);
        formData.append("local", local.value);
        formData.append("type", type.value);
        formData.append("description", description.value);
        formData.append("estloss", estloss.value);
        formData.append("death", death.value);
        formData.append("injured", injured.value);
        formData.append("missing", missing.value);
        formData.append("lat", lat.value);
        formData.append("long", long.value);
        console.log(formData);
        if (isLoggedIn && location.pathname === "/admin/add-event") {
            formData.append("is_verified", 1);
        } else {
            formData.append("is_verified", 0);
        }
        console.log(formData);
        const url = "https://dms-json-hosting.herokuapp.com/api/event/add";
        const options = {};
        const response = await fetch(url + "?" + formData, { method: "POST" });
        // const data = await response.json();
        // console.log(data);
        if (location.pathname === "/admin/add-event") {
            navigate("/admin/view-events", { replace: true });
        } else {
            navigate("/view-events", { replace: true });
        }
        return
        }
        setIsLocationSet(false);
       
    }
    return (
        <>
            <div className="flex space-x-2 flex-row gap-4 align-middle mt-[50px]">
                <div
                    className="h-10"
                    style={{ height: "100vh", width: "60vw" }}
                >
                    <AddEventMap style={{ height: "60vh" }} fillLocation={ (l) => fillLocation(l)} latLong={ (l) => latLong(l)}/>
                </div>
                <div>
                    <div className="text-2xl my-2">Add an Incident</div>
                    <form
                        onSubmit={submitted}
                        className="space-y-3 my-3 rounded"
                    >
                        <div className="flex ">
                            <label
                                htmlFor="title"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Event Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="1 or 2 words"
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="province"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Province
                            </label>

                            <select
                                id="province"
                                name="province"
                                required
                                defaultValue="default"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 "
                            >
                            { eventLocation ? <option value={eventLocation.region}>{eventLocation.region}</option> : <option>Select on Map</option>}
                            
                            </select>
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="districts"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                District
                            </label>

                            <select
                                id="districts"
                                name="district"
                                defaultValue="default"
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 "
                            >
                            { eventLocation ? <option value={eventLocation.county}>{eventLocation.county}</option> : <option>Select on Map</option>}
                            
                            </select>
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="local"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Local
                            </label>

                            <select
                                id="local"
                                name="local"
                                required
                                defaultValue="default"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 "
                            >
                              { eventLocation ? <option value={eventLocation.municipality}>{eventLocation.municipality}</option> : <option>Select on Map</option>}
                            
                            </select>
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="Type"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Type
                            </label>
                            <select
                                id="event"
                                name="type"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 "
                            >
                                <option selected>Other</option>
                                <option value="earthquake">Earthquake</option>
                                <option value="flood">Flood</option>
                                <option value="storm">Storm</option>
                                <option value="tsunami">Tsunami</option>
                                <option value="fire">Fire</option>
                                <option value="landslide">LandSlide</option>
                            </select>
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="description"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="estloss"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Estimated loss
                            </label>
                            <input
                                type="text"
                                id="estloss"
                                name="estloss"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Rs."
                                required
                            />
                        </div>{" "}
                        <div className="flex " >
                            <label
                                htmlFor="death"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Death
                            </label>
                            <input
                                type="text"
                                id="death"
                                name="death"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="missing"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Missing
                            </label>
                            <input
                                type="text"
                                id="missing"
                                name="missing"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="injured"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Injured
                            </label>
                            <input
                                type="text"
                                id="injured"
                                name="injured"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                                required
                            />
                        </div>
                        <div className="flex" style={{ display: "none"}}>
                        <label
                                htmlFor="lat"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Latitude
                            </label>
                            <input
                                type="text"
                                id="lat"
                                name="lat"
                                value={latlng.lat}
                                disabled
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                            />
                        <label
                                htmlFor="lng"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Longitude
                            </label>
                            <input
                                type="text"
                                id="lng"
                                name="long"
                                value={latlng.lng}
                                disabled
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                            />
                        </div>
                        { !isLocationSet && <div style={{color: "red"}}>*Provide Province, District and Local by clicking on Map</div>}
                        <button
                            type="submit"
                            className=" bg-purple-600 text-white w-full h-10 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
