
import {useEffect, useState} from "react";
import {useLocation, Link} from "react-router-dom";

export default function ReliefTable(){
    const [isUser, setIsUser] = useState(false);
    const [relief, setRelief] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/relief"){
            setIsUser(true);
        }
        getData();
    }, []);

    async function getData(){
        try{
            const response = await fetch("https://dms-json-hosting.herokuapp.com/api/relief/view");
            const data = await response.json();
            setRelief(data);
            setLoading(false);
            console.log(data);
            }
            catch(err){
                console.log(err);
            }
    }

    function deleteRelief(id){
        const res = fetch(`https://dms-json-hosting.herokuapp.com/api/relief/delete/${id}`, {
            method: "DELETE",
            headers: {
                authorization:  'Bearer ' + JSON.parse(localStorage.getItem('userInfo')).access_token
            }
        });
        getData()
    }

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
            <td className="px-6 py-4">
                {event.date}
            </td>
            { !isUser &&
                <td className="px-6 py-4 text-right">
                    <Link to={"/admin/relief/update/"+event.id} className="font-medium text-blue-600  hover:underline">Edit</Link>
                </td>}
                { !isUser &&
                <td className="px-6 py-4 text-right">
                    <button onClick={() => deleteRelief(event.id)} className="font-medium text-red-600  hover:underline">Delete</button>
                </td>}
        </tr>)

    });
    if(loading){
        return <h2 className="text-center mt-5">Loading...</h2>
    }
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
                    { <th scope="col" className="px-6 py-3">
                        Date
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
