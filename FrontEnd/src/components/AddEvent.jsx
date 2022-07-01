
export default function AddEvent() {
    return (<>
        <div className="flex space-x-2 flex-col justify-center items-center align-middle mt-[50px]">
        <div className="text-2xl my-2">Add an Event</div>
        <form action="" className="space-y-3 my-3 rounded">
           <div className="">
            <input type="text" className="" placeholder="Event Title" required/>
           </div>
           <div>
            <input type="text" placeholder="Location" required/>
           </div>
           <div>
            <input type="text" placeholder="Type" required/>
           </div>
           <div>
            <input type="text" placeholder="Event description" required/>
           </div>
           <div>
            <input type="text" placeholder="Estimated loss (optional)"/>
           </div>
           <div>
            <input type="text" placeholder="Death (optional)"/>
           </div>
           <div>
            <input type="text" placeholder="Missing (optional)"/>
           </div>
           <div>
            <input type="text" placeholder="Injured (optional)"/>
           </div>
           <button type="submit" className=" bg-purple-600 text-white w-full h-10 rounded">Submit</button>
        </form>
    </div>
    </>)
}
