import SevenDaysSummary from "./summary/sevendaysummary";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ok from "../assets/ok.png"

const alert = () => {
    Swal.fire({
        title: 'Get Alerted',
        html: `
        <input type="text" id="phone" class="swal2-input" placeholder="+977-">
        <input type="text" id="email" class="swal2-input" placeholder="email">
        <input type="text" id="district" class="swal2-input" placeholder="district">`,
        confirmButtonText: 'Submit',
        focusConfirm: false,
        preConfirm: () => {
          const phone = Swal.getPopup().querySelector('#phone').value
          const email = Swal.getPopup().querySelector('#email').value
          const district = Swal.getPopup().querySelector('#district').value
          if (!phone || !email || !district) {
            Swal.showValidationMessage(`Please enter phone, email and district`)
          }
          return { phone, email, district }
        }
      }).then((result) => {

        console.log(result.value)

        fetch(`https://dms-json-hosting.herokuapp.com/api/userdata/add?phone=+977${result.value.phone}&email=${result.value.email}&district=${result.value.district}`, {
            method: 'POST',
        }).then((response) => {response.json})
        .then((data) => {
            Swal.fire(`
            Data recorded. 
            `.trim())
          })
        }
        )

}


export default function Dashboard (){

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        (async() => {
            const res =await fetch('https://dms-json-hosting.herokuapp.com/api/event/viewUser');
            const data = await res.json();
            console.log(data);
            setEventData(data);
        })()
    }, []);

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
            
         </tr> )
     })

    return (
        <>
            <div className="grid grid-cols-12 px-6 gap-3 mt-8 ">
                
                <div className="col-span-8 md:col-span-8">
                    <div className="text-2xl mb-2">Recent Incidents</div>
                    {/* <div className="text-3xl px-8 ">Introduction</div>
                    <p className="px-8 font-serif">Disaster Management system is a community run information management system where user are allowed to enter any incident related information, get information about incidents and reliefs; and are able to provide feedback for current information</p> */}
                    <img src={ok} alt="" height="600px" />

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 mt-10">
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
                    
                </tr>
                </thead>
                <tbody>
                {row}
                </tbody>
            </table>
        </div>
                </div>
                <div className="col-span-4">
                    <SevenDaysSummary />
                    <p className="mt-10 text-2xl">
                        Get Incidents updates in your area at instant. 
                    </p>
                    <button onClick={alert} className="mt-3 py-2 px-4 text-sm font-bold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get Notified</button>
                </div>


            </div>
        </>
    )
}


