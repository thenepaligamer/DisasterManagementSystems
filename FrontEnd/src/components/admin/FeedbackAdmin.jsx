import { useState, useEffect } from "react";

export default function FeedbackAdmin() {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        getFeedback();
    }, []);

    async function getFeedback() {
        const feedback = await fetch(
            "https://dms-json-hosting.herokuapp.com/api/feedback/view",
            {
                method: "GET",
                headers: {
                    authorization:
                        `Bearer ` +
                        JSON.parse(localStorage.getItem("userInfo"))
                            .access_token,
                },
            }
        );
        const feedbackJson = await feedback.json();
        console.log(feedbackJson);
        setFeedbackData(feedbackJson);
    }

    async function deleteFeedback(id) {
        const res = await fetch(
            `https://dms-json-hosting.herokuapp.com/api/feedback/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    authorization:
                        `Bearer ` +
                        JSON.parse(localStorage.getItem("userInfo"))
                            .access_token,
                },
            }
        );
        const data = await res.json();
        getFeedback();
    }

    const row = feedbackData.map((contact) => {
        return (
            <tr
                className="bg-white border-b  hover:bg-gray-50 "
                key={contact.id}
            >
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                >
                    {contact.id}
                </th>
                <td className="px-6 py-4">{contact.phone}</td>
                <td className="px-6 py-4">{contact.message}</td>

                <td className="px-6 py-4">
                    <button
                        onClick={() => deleteFeedback(contact.id)}
                        className="text-red-600 hover:text-indigo-900"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <>
            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody>{row}</tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
