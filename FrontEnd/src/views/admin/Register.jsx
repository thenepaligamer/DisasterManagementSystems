import {useState} from "react";

export default function Register() {
    const [isPwdErr, setIsPwdErr] = useState(false)
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        if( !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)){
            return setIsPwdErr(true)
        }
        setIsPwdErr(false)
        fetch("https://dms-json-hosting.herokuapp.com/api/register", {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })
            .catch(err => console.log(err))
    }
  return (
    <div>
        <div className="flex flex-col justify-center items-center align-middle mt-[150px]">
        <div className="text-3xl">DMS Admin Register</div>
        <form className="mt-2 w-full px-3 sm:px-0 sm:w-1/4" onSubmit={submit}>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6
                     scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                     peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6
                     scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="floating_password"
                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6
                  scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                {isPwdErr && <span className="text-red-600 text-[10px] animate-pulse">* password must be at least 6 character long with special character, uppercase, number </span>}
            </div>

            <button type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
            rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </form>
        </div>
 </div>
  )
}
