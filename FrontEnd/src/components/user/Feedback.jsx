import { useState } from "react";


export default function Feedback(){

    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

   async function submitFeedback(e){
        setLoading(true);
        e.preventDefault();
        const {phone, message} = e.target;
        const formData = new URLSearchParams();
        formData.append("phone", phone.value);
        formData.append("message", message.value);
        console.log(formData);
        const res = await fetch("https://dms-json-hosting.herokuapp.com/api/feedback/add?"+ formData , {
            method: "POST",
        });
        const data = await res.json();
        setLoading(false);
        setIsSent(true);
    }


    if(isSent){
        return <div className="flex text-3xl mt-10 text-center justify-center align-middle"> Your Feedback is recorded.</div>
    }
    return (
        <>
        <div>
        <section class="bg-white :bg-gray-900">
                < div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 :text-white">Feedback</h2>
                <p class="mb-8 lg:mb-8 font-light text-center text-gray-500 :text-gray-400 sm:text-xl">Let us improve from your precious feedback.</p> 
            {loading && <div className="text-2xl">Sending</div> }

                <form action="#" class="space-y-8" onSubmit={submitFeedback}>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 :text-gray-300">Phone</label>
                        <input type="phone" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500 :shadow-sm-light"  required/>
                    </div>
                    {/* <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 :text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500 :shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div> */}
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 :text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
        </div>
        </section>
    </div>
        </>
    )
}