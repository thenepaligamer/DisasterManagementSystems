import {useRef, useState} from "react";
import useFetch from "../../hooks/useFetch";

import useDistrictComponent from "../../hooks/districtComponent";
import {useSelector} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import DisasterImage from "../../assets/disaster.png";

export default function AddEvent() {
    const districtComponent = useDistrictComponent();
    const {isLoggedIn} = useSelector( store => store.adminAuth);
    const location = useLocation();
    const navigate = useNavigate();

    async function submitted (e) {
        e.preventDefault();
        const {title, province, district, local, type, description, estloss, death, injured, missing} = e.target;
        const formData = new URLSearchParams();
        formData.append('title', title.value);
        formData.append("province", province.value);
        formData.append("district", district.value);
        formData.append("local", local.value);
        formData.append("type", type.value);
        formData.append("description", description.value);
        formData.append("estloss", estloss.value);
        formData.append("death", death.value);
        formData.append("injured", injured.value);
        formData.append("missing", missing.value);
        if(isLoggedIn && location.pathname === "/admin/add-event"){
            formData.append("is_verified", 1);
        }
        else{
            formData.append("is_verified", 0);
        }
        console.log(formData);
        const url = "https://dms-json-hosting.herokuapp.com/api/event/add";
        const options = {};
        const response = await fetch(url + '?' + formData, {method: 'POST'});
        const data = await response.json();
        console.log(data);
        if(location.pathname === "/admin/add-event"){
            navigate('/admin/event', {replace: true});
        }
        else{
            navigate('/view-events', {replace: true});
        }
        
    }
    return (<>

        <div className="flex space-x-2 flex-row gap-4 align-middle mt-[50px]">
                <img src={DisasterImage} alt="disaster" className="w-1/3 ml-10" />
            <div>
                <div className="text-2xl my-2">Add an Incident</div>
                <form onSubmit={submitted} className="space-y-3 my-3 rounded">
                    <div className="flex ">
                        <label htmlFor="title"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Event Title</label>
                        <input type="text" id="title" name="title"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="1 or 2 words" required />
                    </div>
                    {districtComponent}
                    <div className="flex ">
                        <label htmlFor="Type"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Type</label>
                        <select id="event" name="type"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
                        <label htmlFor="description"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Description</label>
                        <input type="text" id="description" name="description"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="estloss"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Estimated loss</label>
                        <input type="text" id="estloss" name="estloss"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Rs." required />
                    </div> <div className="flex ">
                    <label htmlFor="death"
                           className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Death</label>
                    <input type="text" id="death" name="death"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                           placeholder="" required />
                </div>
                    <div className="flex ">
                        <label htmlFor="missing"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Missing</label>
                        <input type="text" id="missing" name="missing"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Optional" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="injured"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Injured</label>
                        <input type="text" id="injured" name="injured"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Optional" required />
                    </div>
                    <button type="submit" className=" bg-purple-600 text-white w-full h-10 rounded">Submit</button>
                </form>
            </div>

    </div>
    </>)
}
