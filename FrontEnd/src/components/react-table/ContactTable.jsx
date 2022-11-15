import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactTable() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "https://dms-json-hosting.herokuapp.com/api/contact/view",
                    {}
                );
                const data = await response.json();
                setContacts(data);
                setLoading(false);
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);
    const row = contacts.map((contact) => {
        return (
            <tr
                className="bg-white border-b  hover:bg-gray-50 "
                key={contact.id}
            >
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                    {contact.spokesman}
                </th>
                <td className="px-6 py-4">{contact.local}</td>
                <td className="px-6 py-4">{contact.district}</td>
                <td className="px-6 py-4">{contact.email}</td>
                <td className="px-6 py-4">{contact.phone}</td>
            </tr>
        );
    });
    if (loading) {
        return <h2 className="text-center mt-5">Loading...</h2>;
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Spokesman
                        </th>
                        <th scope="col" className="px-6 py-3">
                            local
                        </th>
                        <th scope="col" className="px-6 py-3">
                            District
                        </th>
                        <th scope="col" className="px-6 py-3">
                            email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            phone
                        </th>
                    </tr>
                </thead>
                <tbody>{row}</tbody>
            </table>
        </div>
    );
}
