import {useEffect, useState} from "react";
import { matchPath, useLocation, Link } from "react-router-dom";
import {useSelector} from "react-redux";

export default function EventTable() {
    const [isUser, setIsUser] = useState(false);
    const {isLoggedIn} = useSelector( store => store.adminAuth);
    const [eventData, setEventData] = useState([]);
    const [verifying, setVerifying] = useState(false);
    const location = useLocation();
    let verifyMessage = "Verifying";

    useEffect(() => {
        if(location.pathname === "/view-events"){
            getData();
            setIsUser(true);
            return
        }
        if(isLoggedIn){
            getAdminData();
        }

    }, [location]);

    async function verify(id){
        setVerifying(true);
        const verify = await fetch(`https://dms-json-hosting.herokuapp.com/api/event/update/status/${id}?is_verified=1`, {
            method: "PUT",
            headers: {
                authorization:  'Bearer ' + JSON.parse(localStorage.getItem('userInfo')).access_token
            }
        });
        verifyMessage = "Verified";
        const verifyJson = await verify.json();
        setVerifying(false);
        console.log(verifyJson);
        getAdminData();
    }

    async  function getData(){
        try {
            const events =  await fetch("https://dms-json-hosting.herokuapp.com/api/event/viewUser");
            console.log(events)
            const eventsJson = await events.json();
            setEventData(eventsJson);
            console.log(eventsJson);
        }
        catch(error){
            console.log(error);
        }
    }
    async function getAdminData(){
        try{
            const events = await fetch("https://dms-json-hosting.herokuapp.com/api/event/view", {
                method: "GET",
                headers: {
                    authorization:  'Bearer ' + JSON.parse(localStorage.getItem('userInfo')).access_token
                }
            });
            const eventsJson = await events.json();
            const filteredEvents = eventsJson.filter(event => event.is_verified === false );
            console.log(filteredEvents);
            setEventData(filteredEvents);
        }
        catch (error){
            console.log(error);
        }
    }

    const row = eventData.map(event => {
        return ( <tr className="bg-white border-b  hover:bg-gray-50 " key={event.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                {event.title}
            </th>
            <td className="px-6 py-4">
                {event.province}
            </td>
            <td className="px-6 py-4">
                {event.district}
            </td>
            <td className="px-6 py-4">
                {event.local}
            </td>
            <td className="px-6 py-4">
                {event.type}
            </td>
            <td className="px-6 py-4">
                {event.description}
            </td>
            <td className="px-6 py-4">
                {event.estloss}
            </td>
            <td className="px-6 py-4">
                {event.death}
            </td>
            {!isUser && <td className="px-6 py-4">
                {event.is_verified ? <span className="text-green-500">Verified</span> : <span className="text-red-500">Not Verified</span>}
            </td> }
            {!isUser &&
                <td className="px-6 py-4 text-right">
                    <button onClick={() => verify(event.id)} className="font-medium text-blue-600  hover:underline">Verify</button>
                </td> }
        </tr> )
    })
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {
                verifying && <div className="absolute text-3xl top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center">{verifyMessage}</div>
            }
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Event Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Province
                    </th>
                    <th scope="col" className="px-6 py-3">
                        District
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Local
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Estimated loss
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Death
                    </th>
                    {!isUser && <th scope="col" className="px-6 py-3">
                        is Verified?
                    </th> }
                    {!isUser &&
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th> }
                </tr>
                </thead>
                <tbody>
                {row}
                </tbody>
            </table>
        </div>

    )
}
