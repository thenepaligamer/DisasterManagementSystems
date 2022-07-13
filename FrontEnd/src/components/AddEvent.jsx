import {useRef, useState} from "react";

import allDistricts from "../utils/districts";
import localBodies from "../utils/localBodies";

export default function AddEvent() {
    const districtSelected = useRef();
    const [localBodyAvailable, setLocalBodyAvailable] = useState(null);
    const district = allDistricts.map( district => {
        return <option key={district} value={district}>{district}</option>;
    });

    function submitted () {

    }
    function changeDistrict(){
        const selectedDistrict = districtSelected.current.value;
        const local = Object.getOwnPropertyDescriptor(localBodies, selectedDistrict); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
        setLocalBodyAvailable(local.value);
        console.log(local.value);

    }
    return (<>
        <div className="flex space-x-2 flex-row gap-4 align-middle mt-[50px]">
                <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX13093698.jpg" alt="disaster" className="w-1/3 ml-10" />
            <div>
                <div className="text-2xl my-2">Add an Incident</div>
                <form onSubmit={submitted} className="space-y-3 my-3 rounded">
                    <div className="flex ">
                        <label htmlFor="name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Event Title</label>
                        <input type="text" id="name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="1 or 2 words" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="districts"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">District</label>

                        <select id="districts" onChange={changeDistrict}
                                ref={districtSelected}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option selected>Choose a District</option>
                            {district}
                        </select>
                    </div>
                    <div className="flex ">
                    <label htmlFor="districts"
                           className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Local</label>

                    <select id="districts"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Choose a LocalBody</option>
                        {localBodyAvailable && localBodyAvailable.map( localBody => <option value={localBody}>{localBody}</option>)}
                    </select>
                </div>
                    <div className="flex ">
                        <label htmlFor="Type"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Type</label>
                        <input type="text" id="type"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="description"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Description</label>
                        <input type="text" id="description"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Ram Bahadhur Thapa" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Estimated loss</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Ram Bahadhur Thapa" required />
                    </div> <div className="flex ">
                    <label htmlFor="first_name"
                           className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Estimated Loss</label>
                    <input type="text" id="first_name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                           placeholder="Ram Bahadhur Thapa" required />
                </div>
                    <div className="flex ">
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Missing</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Optional" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Injured</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Optional" required />
                    </div>
                    <button type="submit" className=" bg-purple-600 text-white w-full h-10 rounded">Submit</button>
                </form>
            </div>

    </div>
    </>)
}
