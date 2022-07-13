
export default function Volunteer() {
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
                    <div className="flex ">
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Full
                            name:</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                               placeholder="Ram Bahadhur Thapa" required />
                    </div>

                    <div className="flex ">
                        <label htmlFor="first_name"
                               className="flex align-middle mr-3  text-sm font-medium text-gray-900 ">Location:</label>
                        <input type="text" id="first_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 "
                               placeholder="District" required />
                    </div>
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
