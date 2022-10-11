import { useEffect, useState } from "react";
import FireIcon from "../../assets/disaster-icons/FireIcon";
import './sevendayssummary.module.css'
import Icon from '@mdi/react'
import {mdiFire, mdiHomeFlood, mdiLandslide, mdiLightningBolt, mdiZodiacTaurus} from '@mdi/js'
const SevenDaysSummary = () => {

    const [summary, setSummary] = useState({
        fire: 0,
        landslide: 0,
        flood: 0,
        lightning: 0,
        earthquake: 0,
        other: 0

    });

    useEffect(() =>{
        getSummary();
    }, [])

    const getSummary = async () => {
        const res = await fetch ('https://dms-json-hosting.herokuapp.com/api/event/summary');
        const data = await res.json();
        setSummary({ summary, ...data });
        console.log(data);
    };

    return (
        <>
            <div className="shadow-xl hover:ease-in hover:bg-amber-50  hover:cursor-pointer">
                <div className="pb-4">
               <h2 className="text-2xl text-white bg-blue-600 text-center"> Summary </h2>
                <div className="main p-1">
                <div className="text-center py-2 border-2 border-black">
                    
                <span className="text-md ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiLandslide} size={2} color="green" /> LandSlide : {summary.landslide ? summary.landslide : 0} Incidents
                </span>
                </div>
                    <div className="grid grid-cols-2 p-0">
                        <span className="text-md ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiHomeFlood} size={2} color="red" /> Flood : { summary.flood ? summary.flood : 0} Incidents
                        </span>
                        
                        <span className="text-md text-nowrap">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiLightningBolt} size={2} color="red" /> ThunderBolt : { summary.lightning ? summary.lightning : 0} Incidents
                        </span>
                       
                        <span className="text-md ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                        <Icon path={mdiFire} size={2} color="red" /> Fire : { summary.fire ? summary.fire : 0  } Incidents
                        </span>
                        <span className="text-md pt-2">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiZodiacTaurus} size={2} color="red" /> Others : { summary.other ? summary.other : 0} Incidents
                        </span>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default SevenDaysSummary;
