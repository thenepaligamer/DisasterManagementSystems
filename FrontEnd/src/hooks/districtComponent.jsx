import {useEffect, useRef, useState} from "react";

import allDistricts from "../utils/districts";
import localBodies from "../utils/localBodies";

const useDistrictComponent = (props = {province: null, district: null, local: null,}) => {
    const districtSelected = useRef();
    const [localBodyAvailable, setLocalBodyAvailable] = useState(null);
    const district = allDistricts.map( district => {
        return <option key={district} value={district}>{district}</option>;
    });

    useEffect(() =>{
    changeDistrict()
    }, []);

    function changeDistrict(){
        const selectedDistrict = districtSelected.current.value;

        const local = Object.getOwnPropertyDescriptor(localBodies, selectedDistrict); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
        setLocalBodyAvailable(local ? local.value : null);

    };

   return (<>
       <div className="flex ">
           <label htmlFor="province"
                  className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Province</label>

           <select id="province" onChange={changeDistrict} name="province"
                   ref={districtSelected} defaultValue={ props.province || 'default'} value={props.province}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
               <option value={props.province || "default"}>Choose a Province</option>
               <option value="Province 1">Province 1</option>
               <option value="Madhesh_Pradesh">Madesh Pradesh</option>
               <option value="Bagmati">Bagmati</option>
               <option value="Gnadaki">Gandaki</option>
               <option value="Lumbini">Lumbini</option>
               <option value="Karnali">Karnali</option>
               <option value="Sudurpaschim">SudurPaschim</option>
           </select>
       </div>
       <div className="flex ">
        <label htmlFor="districts"
               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">District</label>

        <select id="districts" onChange={changeDistrict} name="district" defaultValue={props.district || 'default'}
                ref={districtSelected}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option value={props.district || "default"}>Choose a District</option>
            {district}
        </select>
    </div>
    <div className="flex ">
        <label htmlFor="local"
               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Local</label>

        <select id="local" name="local" defaultValue={'default'}
                value={props.local}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option value={props.local ||"default"}>Choose a LocalBody</option>
            {localBodyAvailable && localBodyAvailable.map( localBody => <option value={localBody} key={localBody}>{localBody}</option>)}
        </select>
    </div>
   </>);

};

export default useDistrictComponent;
