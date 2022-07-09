import {useState} from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdown = () => {
        console.log("dropdown");
        setIsOpen(!isOpen);
    }
    return (
    <>
       <div>
           <nav className="px-2 bg-white border-gray-200 mt-5">
               <div className="container flex  items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                   <a href="#" className="flex items-center">
                        <span
                            className="self-center text-5xl font-semibold whitespace-nowrap">DMS</span>
                   </a>
                   <button data-collapse-toggle="mobile-menu" type="button"
                           className="inline-flex items-center justify-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 "
                           aria-controls="mobile-menu-2" aria-expanded="false">
                       <span className="sr-only">Open main menu</span>
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd"
                                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                 clipRule="evenodd"></path>
                       </svg>
                       <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd"
                                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                 clipRule="evenodd"></path>
                       </svg>
                   </button>
                   <div className="hidden w-full  md:block md:w-auto" id="mobile-menu">
                       <ul className="flex flex-col  mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                           <li>
                               <a href="#"
                                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-xl"
                                  aria-current="page">Home</a>
                           </li>
                           <li>
                               <button id="dropdownNavbarLink" onClick={dropdown} data-dropdown-toggle="dropdownNavbar"
                                       className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 text-xl border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">Events <svg
                                   className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path fillRule="evenodd"
                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                         clipRule="evenodd"></path>
                               </svg></button>
                               { isOpen && <div id="dropdownRightStart"
                                     className="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 ">
                                   <ul className="py-1 text-sm text-black dark:text-gray-200"
                                       aria-labelledby="dropdownRightStartButton">
                                       <li>
                                           <a href="#"
                                              className="block px-4 py-2 text-black hover:bg-gray-100 ">Add Events</a>
                                       </li>
                                       <li>
                                           <a href="#"
                                              className="block px-4 py-2 text-black hover:bg-gray-100 ">View Events</a>
                                       </li>
                                   </ul>
                               </div>
                               }
                           </li>
                           <li>
                               <a href="#"
                                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Contacts</a>
                           </li>
                           <li>
                               <a href="#"
                                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Relief</a>
                           </li>
                           <li>
                               <a href="#"
                                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 text-xl hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Weather</a>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </div>
    </>
)
}
