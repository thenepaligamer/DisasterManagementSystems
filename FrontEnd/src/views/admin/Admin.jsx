import NavBar from "../../components/admin/NavBar";
import { useSelector} from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import {useEffect} from "react";
export default function Admin() {

    const {isLoggedIn} = useSelector( store => store.adminAuth);
    const navigate = useNavigate();

    useEffect(() =>{
        if(!isLoggedIn){
            navigate('/admin/login', {replace: true});
        }
    },[])

    return (<>
        {isLoggedIn && <NavBar/> }
        <Outlet/>
    </>)
}
