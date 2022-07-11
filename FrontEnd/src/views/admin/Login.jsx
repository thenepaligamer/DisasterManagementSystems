import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {login, setToken} from "../../store/admin/adminAuthSlice";

export default function Login (){

    const {isLoggedIn} = useSelector( store => store.adminAuth);
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({});

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        formData.append('email', email);
        formData.append('password', password);
        try{
            const res = await fetch("http://localhost:8000/api/login", {
                method: 'POST',
                body: formData,
            });
            const credentials = await res.json();

            if(credentials.access_token) {
                console.log(credentials.access_token);
                localStorage.setItem("userInfo", JSON.stringify(credentials));
                setUserInfo(credentials);
                dispatch(login())
                dispatch(setToken(credentials.access_token));
                navigate('/admin', {replace: true});
              }
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect( () => {
        if(isLoggedIn){
            console.log("already logged in")
            navigate('/admin', {replace: true});
        }
    }, [])

 return (<div>
        <div className="flex flex-col justify-center items-center align-middle mt-[150px]">
        <div className="text-3xl">DMS Admin Login</div>
        <form className="mt-2 w-full px-3 sm:px-0 sm:w-1/4" onSubmit={submit}>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </form>
        </div>
 </div> )
}
