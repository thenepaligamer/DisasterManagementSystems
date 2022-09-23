import FireIcon from "../../assets/disaster-icons/FireIcon";
import './sevendayssummary.module.css'
import Icon from '@mdi/react'
import {mdiFire, mdiHomeFlood, mdiLandslide, mdiLightningBolt} from '@mdi/js'
const SevenDaysSummary = () => {
    return (
        <>
            <div className="shadow-xl hover:ease-in hover:bg-amber-50  hover:cursor-pointer">
                <div className="pb-4">
               <h2 className="text-2xl text-white bg-blue-600 text-center"> Summary </h2>
                <div className="main p-1">
                <div className="text-center py-2 border-2 border-black">
                    <span className="text-md ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                        <Icon path={mdiFire} size={2} color="red" /> Fire : 9 Incidents
                    </span>

                </div>
                    <div className="grid grid-cols-2 p-0">
                        <span className="text-md pt-2">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiFire} size={2} color="red" /> Fire : 5 Incidents
                        </span>
                        <span className="text-md text-nowrap">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiLightningBolt} size={2} color="red" /> ThunderBolt : 4 Incidents
                        </span>
                        <span className="text-md ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiLandslide} size={2} color="green" /> LandSlide : 3 Incidents
                        </span>
                        <span className="text-md ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiHomeFlood} size={2} color="red" /> Flood : 2 Incidents
                        </span>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default SevenDaysSummary;
