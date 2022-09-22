import useDistrictComponent from "../../hooks/districtComponent";

import {useState} from "react";
import VolunteerImg from "../../assets/volunteer.png";

export default function Volunteer() {

    const districtComponent = useDistrictComponent();
    const [loading, setLoading] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    async function submitted(e) {
        e.preventDefault();
        console.log(e.target);
        const {type, full_name, phone,email, interested_area,province, district, local, manpower, ward_no} = e.target;
        const formData = new URLSearchParams();
        formData.append("type", type.value);
        formData.append("name", full_name.value);
        formData.append("phone", phone.value);
        formData.append("email", email.value);
        formData.append("interested_area", interested_area.value);
        formData.append("district", district.value);
        formData.append("local", local.value);
        formData.append("province", province.value);
        formData.append("manpower", manpower.value);
        formData.append("ward_no", ward_no.value);
        console.log(formData);
        const url = "https://dms-json-hosting.herokuapp.com/api/volunteer/add";
        try {
            const response = await fetch(url +'?'+ formData, {
                method: 'POST',
            });
            const data = await response.json();
            setIsSubmitted(true);
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
if(isSubmitted){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">Thank You!</h1>
                            <p className="text-center">We will contact you soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    return (
    <>
        <div className="flex align-middle gap-20 mt-4 p-2 md:mt-[50px] md:p-0">
            <img
                src={VolunteerImg}
                alt="Volunteer Picture"
                className="w-1/3 ml-10 hidden md:block"/>
            <div className="w-full sm:w-3/4 md:w-1/4 lg:w-1/4">
                <div className="text-2xl my-2">Volunteer Form</div>
                <form  className="space-y-3 my-3 rounded flex flex-col " onSubmit={submitted}>
                    <div className="flex">
                        <label className="flex align-middle mr-3  text-sm font-medium text-gray-900 " htmlFor="firstName">Type</label>
                        <select name="type" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option value="Individual">Individual</option>
                            <option value="Organization">Organization</option>
                        </select>
                    </div>
                    <div className="flex ">
                        <label htmlFor="full_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Full
                            name:</label>
                        <input type="text" id="full_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"
                               placeholder="Ram Bahadhur Thapa" required />
                    </div>

                    {districtComponent}
                    <div className="flex ">
                        <label htmlFor="ward"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Ward No:</label>
                        <input type="text" id="ward_no"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="phone"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Phone:</label>
                        <input type="text" id="phone"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="98-********" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="email"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Email(Optional):</label>
                        <input type="text" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="Email" />
                    </div>
                    <div className="flex ">
                        <label htmlFor="interested_area"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Interested Area:</label>
                        <input type="text" id="interested_area"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="Location" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="manpower"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Manpower:</label>
                        <input type="text" id="manpower"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="Time to be commited" required />
                    </div>

                    <button type="submit" className=" bg-purple-600 text-white w-full h-10 rounded">Submit</button>
                </form>
            </div>

        </div>

    </>
    )
}
