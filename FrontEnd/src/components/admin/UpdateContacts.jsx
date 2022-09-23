
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import useDistrictComponent from "../../hooks/districtComponent";

import {useNavigate} from "react-router-dom";
import * as Url from "url";

export default function UpdateEvents() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({});
    const districtComponent = useDistrictComponent({province: event.province, district: event.district, local: event.local});
    const [loading, setLoading] = useState(true);
    const token =  JSON.parse(localStorage.getItem('userInfo')).access_token

    useEffect( () => {

        console.log(token);
        (async () => {
            const response = await fetch(`https://dms-json-hosting.herokuapp.com/api/relief/update/2${id}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`,
                }
            });
            const data = await response.json();
            console.log(data);
            setEvent(data);
            setLoading(false);
        })()
    }, [])

    async function submit(e){
        e.preventDefault();
        const {province, district, local, spokesman, phone, email,} = e.target;
        const formData = new URLSearchParams();
        formData.append('spokesman', spokesman.value);
        formData.append("province", province.value);
        formData.append("district", district.value);
        formData.append("local", local.value);
        formData.append("phone", phone.value);
        formData.append("email", email.value);
        console.log(formData);
        const response = await fetch((`https://dms-json-hosting.herokuapp.com/api/contact/update/${id}?` + formData), {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
        navigate('/admin/view-contact', {replace: true});
    }

    return (<>
        <div className=" mt-5 ">
            <h1 className="flex justify-center">Update Contact</h1>
            <div className="flex justify-center">
                <form  className="space-y-3 my-3 rounded w-1/4" onSubmit={submit}>
                    <div className="flex ">
                        <label htmlFor="spokesman   "
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Spokesman</label>
                        <input type="text" id="spokesman" name="spokesman"
                               value={event.spokesman}
                               onChange={e => setEvent({...event, spokesman: e.target.value})}
                               className="bg-gray-50 border w-4/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Full name" required />
                    </div>
                    {districtComponent}
                   
                    <div className="flex ">
                        <label htmlFor="phone"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Phone</label>
                        <input type="text" id="phone" name="phone" value={event.phone}
                               onChange={e => setEvent({...event, phone: e.target.value})}
                               className="bg-gray-50 border w-4/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="email"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Email</label>
                        <input type="text" id="email" name="email"
                               value={event.email}
                               onChange={e => setEvent({...event, email: e.target.value})}
                               className="bg-gray-50 border w-4/6    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="" required />
                    </div> 
                    <button type="submit" className=" bg-purple-600 text-white w-full h-10 rounded">Submit</button>
                </form>
            </div>
        </div>
    </>)
};
