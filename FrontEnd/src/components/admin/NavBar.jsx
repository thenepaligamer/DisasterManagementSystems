import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isEventOpen, setIsEventOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isReliefOpen, setIsReliefOpen] = useState(false);

    function dropdownProfile() {
        console.log("dropdownProfile");
        setIsProfileOpen(!isProfileOpen);
    }
    function dropdownEvents() {
        setIsEventOpen(!isEventOpen);
    }
    function isOpen() {
        if (isProfileOpen) {
            setIsProfileOpen(false);
        }
        if (isEventOpen) {
            setIsEventOpen(false);
        }
        if (isContactOpen) {
            setIsContactOpen(false);
        }
        if (isReliefOpen) {
            setIsReliefOpen(false);
        }
    }
    function dropdownContact() {
        setIsContactOpen(!isContactOpen);
    }
    function dropdownRelief() {
        console.log("relief");
        setIsReliefOpen(!isReliefOpen);
    }

    function signOut() {
        localStorage.removeItem("userInfo");
        window.location.reload();
    }

    return (
        <>
            <div>
                <nav className="bg-gray-800" onClick={isOpen}>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>

                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>

                                    <svg
                                        className="hidden h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <a href="/admin">
                                        <h2 className="text-white text-3xl">
                                            Admin
                                        </h2>
                                    </a>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to="/admin"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            <span
                                                className=""
                                                aria-current="page"
                                            >
                                                Dashboard
                                            </span>
                                        </NavLink>
                                        <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            <button
                                                id="dropdownNavbarLink"
                                                onClick={dropdownEvents}
                                                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium   border-b border-gray-100  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                                            >
                                                Incidents{" "}
                                                <svg
                                                    className="w-4 h-4 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                            {isEventOpen && (
                                                <div
                                                    id="dropdownRightStart"
                                                    className="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 "
                                                >
                                                    <ul
                                                        className="py-1 text-sm text-black dark:text-gray-200"
                                                        aria-labelledby="dropdownRightStartButton"
                                                    >
                                                        <li>
                                                            <NavLink
                                                                to="add-event"
                                                                className="block px-4 py-2 text-black hover:bg-gray-100 "
                                                            >
                                                                Add Incident
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to="view-events"
                                                                className="block px-4 py-2 text-black hover:bg-gray-100 "
                                                            >
                                                                View Incidents
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to="pending-events"
                                                                className="block px-4 py-2 text-black hover:bg-gray-100 "
                                                            >
                                                                Pending
                                                                Incidents
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            <button
                                                id="dropdownNavbarLink"
                                                onClick={dropdownContact}
                                                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium   border-b border-gray-100  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                                            >
                                                Contacts{" "}
                                                <svg
                                                    className="w-4 h-4 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                            {isContactOpen && (
                                                <div
                                                    id="dropdownRightStart"
                                                    className="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 "
                                                >
                                                    <ul
                                                        className="py-1 text-sm text-black dark:text-gray-200"
                                                        aria-labelledby="dropdownRightStartButton"
                                                    >
                                                        <li>
                                                            <NavLink
                                                                to="add-contact"
                                                                className="block px-4 py-2 text-black hover:bg-gray-100 "
                                                            >
                                                                Add Contacts
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to="view-contact"
                                                                className="block px-4 py-2 text-black hover:bg-gray-100 "
                                                            >
                                                                View Contact
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            <button
                                                id="dropdownNavbarLink"
                                                onClick={dropdownRelief}
                                                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium   border-b border-gray-100  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                                            >
                                                Relief{" "}
                                                <svg
                                                    className="w-4 h-4 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                            {isReliefOpen && (
                                                <div
                                                    id="dropdownRightStart"
                                                    className="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 "
                                                >
                                                    <ul
                                                        className="py-1 text-sm text-black dark:text-gray-200"
                                                        aria-labelledby="dropdownRightStartButton"
                                                    >
                                                        <li>
                                                            <NavLink
                                                                to="add-relief"
                                                                className="block px-4 py-2 text-black hover:bg-gray-100 "
                                                            >
                                                                Add Relief Data
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to="relief"
                                                                className="block px-4 py-2 text-black hover:bg-gray-100 "
                                                            >
                                                                View Relief
                                                                Table
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <NavLink
                                                to="volunteer"
                                                className=" block px-5 text-center py-2 text-gray-200 hover:bg-gray-100 hover:text-black rounded shadow w-5/6 "
                                            >
                                                Volunteer
                                            </NavLink>
                                        </div>
                                        <div>
                                            <NavLink
                                                to="feedback"
                                                className=" block px-5 text-center py-2 text-gray-200 hover:bg-gray-100 hover:text-black rounded shadow w-5/6 "
                                            >
                                                Feedback
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">
                                        View notifications
                                    </span>

                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>

                                <div
                                    className="ml-3 relative z-10"
                                    onClick={dropdownProfile}
                                >
                                    <div>
                                        <button
                                            type="button"
                                            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            id="user-menu-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                    {isProfileOpen && (
                                        <div
                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="user-menu-button"
                                            tabIndex="-1"
                                        >
                                            {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1" >Settings</a> */}
                                            <button
                                                onClick={() => signOut()}
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="user-menu-item-2"
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#"
                                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                                aria-current="page"
                            >
                                Dashboard
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Add Event
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                View Event
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Pending Event
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
