import useDistrictComponent from "../../hooks/districtComponent";

export default function Volunteer() {

    const districtComponent = useDistrictComponent()

    return (
    <>
        <div className="flex gap-20  mt-[50px]">
            <img
                src="https://static.vecteezy.com/system/resources/previews/000/402/754/original/volunteers-with-charity-icons-illustration-vector.jpg"
                alt="Volunteer Picture"
                className="w-1/3 ml-10"/>
            <div className="w-1/4">
                <div className="text-2xl my-2">Volunteer Form</div>
                <form  className="space-y-3 my-3 rounded flex flex-col ">
                    <div className="flex">
                        <label className="flex align-middle mr-3  text-sm font-medium text-gray-900 " htmlFor="firstName">Type</label>
                        <select name="type" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Phone:</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="98-********" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Email(Optional):</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="Email" />
                    </div>
                    <div className="flex ">
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Interested Area:</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="Location" required />
                    </div>
                    <div className="flex ">
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Duration:</label>
                        <input type="text" id="first_name"
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
