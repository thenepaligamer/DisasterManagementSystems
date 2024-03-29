import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import useDistrictComponent from "../../hooks/districtComponent";

import { useNavigate } from "react-router-dom";
import * as Url from "url";

export default function UpdateEvents() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({});
    // const districtComponent = useDistrictComponent({province: event.province, district: event.district, local: event.local});
    const [loading, setLoading] = useState(true);
    const token = JSON.parse(localStorage.getItem("userInfo")).access_token;

    useEffect(() => {
        console.log(token);
        (async () => {
            const response = await fetch(
                `https://dms-json-hosting.herokuapp.com/api/event/update/${id}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();
            console.log(data);
            setEvent(data);
            setLoading(false);
        })();
    }, []);

    async function submit(e) {
        e.preventDefault();
        const { title, type, description, estloss, death, injured, missing } =
            e.target;
        const formData = new FormData();
        formData.append("title", title.value);
        formData.append("province", event.province);
        formData.append("district", event.district);
        formData.append("local", event.local);
        formData.append("type", type.value);
        formData.append("description", description.value);
        formData.append("estloss", estloss.value);
        formData.append("death", death.value);
        formData.append("injured", injured.value);
        formData.append("missing", missing.value);
        formData.append("is_verified", 1);
        console.log(formData);
        const response = await fetch(
            `https://dms-json-hosting.herokuapp.com/api/event/update/${id}?_method=PUT`,
            {
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: formData,
            }
        );
        navigate("/admin/view-events", { replace: true });
    }

    return (
        <>
            <div className=" mt-5 ">
                <h1 className="flex justify-center">Update Event</h1>
                <div className="flex justify-center">
                    <form
                        className="space-y-3 my-3 rounded w-1/4"
                        onSubmit={submit}
                    >
                        <div className="flex ">
                            <label
                                htmlFor="title"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Event Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={event.title}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        title: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border w-4/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="1 or 2 words"
                                required
                            />
                        </div>
                        {/* {districtComponent} */}
                        <div className="flex ">
                            <label
                                htmlFor="Type"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Type
                            </label>
                            <select
                                id="event"
                                name="type"
                                onChange={(e) =>
                                    setEvent({ ...event, type: e.target.value })
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            >
                                <option selected>Other</option>
                                <option value="earthquake">Earthquake</option>
                                <option value="flood">Flood</option>
                                <option value="storm">Storm</option>
                                <option value="tsunami">Tsunami</option>
                                <option value="fire">Fire</option>
                                <option value="landslide">LandSlide</option>
                            </select>
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="description"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={event.description}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        description: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border w-4/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="estloss"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Estimated loss
                            </label>
                            <input
                                type="text"
                                id="estloss"
                                name="estloss"
                                value={event.estloss}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        estloss: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border w-4/6    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
                                required
                            />
                        </div>{" "}
                        <div className="flex ">
                            <label
                                htmlFor="death"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Death
                            </label>
                            <input
                                type="text"
                                id="death"
                                name="death"
                                value={event.death}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        death: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 w-4/5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="missing"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Missing
                            </label>
                            <input
                                type="text"
                                id="missing"
                                name="missing"
                                value={event.missing}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        missing: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 w-4/5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="injured"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Injured
                            </label>
                            <input
                                type="text"
                                id="injured"
                                name="injured"
                                value={event.injured}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        injured: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 w-4/5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className=" bg-purple-600 text-white w-full h-10 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
