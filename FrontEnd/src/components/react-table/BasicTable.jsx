import data from "../MOCK_DATA.json"

export default function BasicTable() {
    console.log(data)
    const row = data.map(event => {
       return ( <tr className="bg-white border-b  hover:bg-gray-50 " key={event.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                {event.eventTitle}
            </th>
            <td className="px-6 py-4">
                {event.location}
            </td>
            <td className="px-6 py-4">
                {event.type}
            </td>
            <td className="px-6 py-4">
                {event.description}
            </td>
            <td className="px-6 py-4">
                {event.estimatedLoss}
            </td>
            <td className="px-6 py-4">
                {event.death}
            </td>
            <td className="px-6 py-4">
                {event.injured}
            </td>
            <td className="px-6 py-4">
                {event.missing}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
            </td>
        </tr> )
    })
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Event Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Location
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Estimated loss
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Death
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Injured
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Missing
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {row}

                </tbody>
            </table>
        </div>

    )
}
