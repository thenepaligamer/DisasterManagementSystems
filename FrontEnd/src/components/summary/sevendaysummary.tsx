import FireIcon from "../../assets/disaster-icons/FireIcon";
import './sevendayssummary.module.css'
import Icon from '@mdi/react'
import {mdiFire, mdiHomeFlood, mdiLandslide} from '@mdi/js'
export default function SevenDaysSummary() {
    return (
        <>
            <div className="shadow-xl hover:ease-in hover:bg-amber-50  hover:cursor-pointer">
                <div className="pb-4">
               <h2 className="text-2xl text-white bg-blue-600 text-center"> Summary(Last 7 days) </h2>
                <div className="main">
                <div className="text-center py-2">
                    <span className="text-xl ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                        <Icon path={mdiFire} size={3} color="red" /> (Fire) : 20 Incidents
                    </span>

                </div>
                    <div>
                        <span className="text-xl pt-2">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiFire} size={3} color="red" /> (Fire) : 20 Incidents
                        </span>
                        <span className="text-xl ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiFire} size={3} color="red" /> (Fire) : 20 Incidents
                        </span><span className="text-xl ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiLandslide} size={3} color="green" /> (Fire) : 20 Incidents
                        </span><span className="text-xl ">
                        {/*<FireIcon color="red" height="60px" width="60px" />*/}
                            <Icon path={mdiHomeFlood} size={3} color="red" /> (Fire) : 20 Incidents
                        </span>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}
