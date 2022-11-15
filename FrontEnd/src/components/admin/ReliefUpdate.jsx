import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useDistrictComponent from "../../hooks/districtComponent";

import { useNavigate } from "react-router-dom";
import * as Url from "url";

export default function UpdateEvents() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({});
    const districtComponent = useDistrictComponent({
        province: event.province,
        district: event.district,
        local: event.local,
    });
    const [loading, setLoading] = useState(true);
    const token = JSON.parse(localStorage.getItem("userInfo")).access_token;

    useEffect(() => {
        console.log(token);
        (async () => {
            const response = await fetch(
                `https://dms-json-hosting.herokuapp.com/api/relief/update/${id}`,
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
        const {
            province,
            district,
            local,
            rice,
            date,
            sugar,
            readymade,
            salt,
            water,
        } = e.target;
        const formData = new URLSearchParams();
        formData.append("province", province.value);
        formData.append("district", district.value);
        formData.append("local", local.value);
        formData.append("rice", rice.value);
        formData.append("date", date.value);
        formData.append("sugar", sugar.value);
        formData.append("readymade", readymade.value);
        formData.append("salt", salt.value);
        formData.append("housing", housing.value);
        formData.append("water", water.value);

        console.log(formData);
        const response = await fetch(
            `https://dms-json-hosting.herokuapp.com/api/relief/update/${id}?` +
                formData,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        navigate("/admin/relief", { replace: true });
    }

    return (
        <>
            <div className=" mt-5 ">
                <h1 className="flex justify-center">Update Relief</h1>
                <div className="flex justify-center">
                    <form
                        className="space-y-3 my-3 rounded w-1/4"
                        onSubmit={submit}
                    >
                        {districtComponent}

                        <div className="flex ">
                            <label
                                htmlFor="date"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Date
                            </label>
                            <input
                                type="text"
                                id="date"
                                name="date"
                                value={event.date}
                                onChange={(e) =>
                                    setEvent({ ...event, date: e.target.value })
                                }
                                className="bg-gray-50 border w-4/6    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="rice"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Rice
                            </label>
                            <input
                                type="text"
                                id="rice"
                                name="rice"
                                value={event.rice}
                                onChange={(e) =>
                                    setEvent({ ...event, rice: e.target.value })
                                }
                                className="bg-gray-50 border w-4/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="sugar"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Sugar
                            </label>
                            <input
                                type="text"
                                id="sugar"
                                name="sugar"
                                value={event.sugar}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        sugar: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 w-4/5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="salt"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Salt
                            </label>
                            <input
                                type="text"
                                id="salt"
                                name="salt"
                                value={event.salt}
                                onChange={(e) =>
                                    setEvent({ ...event, salt: e.target.value })
                                }
                                className="bg-gray-50 border border-gray-300 w-4/5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="readymade"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Readymade
                            </label>
                            <input
                                type="text"
                                id="readymade"
                                name="readymade"
                                value={event.readymade}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        readymade: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 w-4/5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="water"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Water
                            </label>
                            <input
                                type="text"
                                id="readymade"
                                name="water"
                                value={event.water}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        water: e.target.value,
                                    })
                                }
                                className="bg-gray-50 border border-gray-300 w-4/5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Optional"
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="housing"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Housing
                            </label>
                            <input
                                type="text"
                                id="housing"
                                name="housing"
                                value={event.housing}
                                onChange={(e) =>
                                    setEvent({
                                        ...event,
                                        housing: e.target.value,
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
