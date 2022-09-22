import {useRef, useState} from "react";
import useFetch from "../../hooks/useFetch";

import useDistrictComponent from "../../hooks/districtComponent";
import {useSelector} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddEvent() {
    const districtComponent = useDistrictComponent();
    const navigate = useNavigate();

    async function submitted (e) {
        e.preventDefault();
        const {spokesman, district, local, email, phone, province} = e.target;
        const formData = new URLSearchParams();
        formData.append('spokesman', spokesman.value);
        formData.append("district", district.value);
        formData.append("local", local.value);
        formData.append("email", email.value);
        formData.append("phone", phone.value);
        formData.append("province", province.value);
        console.log(formData);
        const url = "https://dms-json-hosting.herokuapp.com/api/contact/add";
        const response = await fetch(url + '?' + formData, {
            method: 'POST', 
            headers: {
                authorization: `Bearer `+ JSON.parse(localStorage.getItem('userInfo')).access_token,
            }});
        console.log(response)
       
        
    }
    return (<>

        <div className="flex justify-center space-x-2 flex-row gap-4 align-middle mt-[50px]">
            <div>
                <div className="text-2xl my-2">Add Contact</div>
                <form onSubmit={submitted} className="space-y-3 my-3 rounded">
                    <div className="flex ">
                        <label htmlFor="spokesman"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Spokesman</label>
                        <input type="text" id="spokesman" name="spokesman"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Full name" required />
                    </div>
                    {districtComponent}
                   
                    <div className="flex ">
                        <label htmlFor="email"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Email</label>
                        <input type="text" id="email" name="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="phone"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Phone</label>
                        <input type="text" id="phone" name="phone"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="" required />
                    </div> 
                    <button type="submit" className=" bg-purple-600 text-white w-full h-10 rounded">Submit</button>
                </form>
            </div>

    </div>
    </>)
}
