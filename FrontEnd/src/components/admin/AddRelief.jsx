import useDistrictComponent from "../../hooks/districtComponent";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddRelief() {
    const districtComponent = useDistrictComponent();
    const { isLoggedIn } = useSelector((store) => store.adminAuth);
    const location = useLocation();
    const navigate = useNavigate();

    async function submitted(e) {
        e.preventDefault();
        const {
            province,
            district,
            local,
            date,
            rice,
            sugar,
            salt,
            readymade,
            water,
            otherfood,
            housing,
        } = e.target;
        const formData = new URLSearchParams();
        formData.append("province", province.value);
        formData.append("district", district.value);
        formData.append("local", local.value);
        formData.append("date", date.value);
        formData.append("rice", rice.value);
        formData.append("sugar", sugar.value);
        formData.append("salt", salt.value);
        formData.append("readymade", readymade.value);
        formData.append("water", water.value);
        formData.append("otherfood", otherfood.value);
        formData.append("housing", housing.value);
        const url = "https://dms-json-hosting.herokuapp.com/api/relief/add";
        const options = {};
        const response = await fetch(url + "?" + formData, {
            method: "POST",
            headers: {
                authorization:
                    `Bearer ` +
                    JSON.parse(localStorage.getItem("userInfo")).access_token,
            },
        });
        const data = await response.json();
        navigate("/admin/relief", { replace: true });
        console.log(data);
    }
    return (
        <>
            <div className="flex justify-center space-x-2 flex-row gap-4 align-middle mt-[50px]">
                <div>
                    <div className="text-center text-2xl my-2">Add Relief</div>
                    <form
                        onSubmit={submitted}
                        className="space-y-3 my-3 rounded"
                    >
                        {districtComponent}
                        <div className="flex ">
                            <label
                                htmlFor="Type"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Date
                            </label>
                            <input
                                type="text"
                                id="date"
                                name="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="yyyy/mm/dd"
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Ton"
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Ton"
                                required
                            />
                        </div>{" "}
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Ton"
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="packs"
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
                                id="water"
                                name="water"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Ltr"
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor="otherfood"
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Otherfood
                            </label>
                            <input
                                type="text"
                                id="otherfood"
                                name="otherfood"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="flex ">
                            <label
                                htmlFor=""
                                className="flex align-middle mr-3  text-sm font-medium text-gray-900 "
                            >
                                Housing
                            </label>
                            <input
                                type="text"
                                id="housing"
                                name="housing"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                placeholder=""
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
