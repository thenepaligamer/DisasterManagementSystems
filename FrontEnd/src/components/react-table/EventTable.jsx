import {useEffect, useState} from "react";
import { matchPath, useLocation } from "react-router-dom";

export default function EventTable() {
    const [isUser, setIsUser] = useState(false);
    const [eventData, setEventData] = useState([]);
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/view-events"){
            getData();
            setIsUser(true);
        }
    }, [location]);



    async  function getData(){
        try {
            const events =  await fetch("http://localhost:8000/api/event/viewUser");
            const eventsJson = await events.json();
            setEventData(eventsJson);
            console.log(eventsJson);
        }
        catch(error){
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
            <td className="px-6 py-4">
                {event.injured}
            </td>
            <td className="px-6 py-4">
                {event.missing}
            </td>
           {!isUser && <td className="px-6 py-4">
               {event.is_verified}
           </td> }
           {!isUser &&
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
            </td> }
        </tr> )
    })
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                    <th scope="col" className="px-6 py-3">
                        Injured
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Missing
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
3
                </tbody>
            </table>
        </div>

    )
}
