import relief from "./Relief.json"
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export default function ReliefTable(){
    const [isUser, setIsUser] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/relief"){
            setIsUser(true);
        }
    })
    const row = relief.map(event => {
        return (<tr className="bg-white border-b  hover:bg-gray-50 " key={event.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                {event.district}
            </th>
            <td className="px-6 py-4">
                {event.local}
            </td>
            <td className="px-6 py-4">
                {event.rice}
            </td>
            <td className="px-6 py-4">
                {event.sugar}
            </td>
            <td className="px-6 py-4">
                {event.salt}
            </td>
            <td className="px-6 py-4">
                {event.readymade}
            </td>
            <td className="px-6 py-4">
                {event.water}
            </td>
            <td className="px-6 py-4">
                {event.otherfood}
            </td>
            <td className="px-6 py-4">
                {event.housing}
            </td>
            { !isUser &&
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                </td>}
        </tr>)

    });
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        District
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Local
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Rice
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Sugar
                    </th>
                    <th scope="col" className="px-6 py-3">
                       Salt
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Readymade
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Water
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Otherfood
                    </th>
                    { <th scope="col" className="px-6 py-3">
                        Housing
                    </th> }
                    { !isUser &&
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
