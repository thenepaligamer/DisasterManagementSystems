import NavBar from "../../components/admin/NavBar";
import { useSelector} from "react-redux";
import { Outlet } from "react-router-dom";
export default function Admin() {
    const {isLoggedIn} = useSelector( store => store.adminAuth);
    return (<>
        {isLoggedIn && <NavBar/> }
        <Outlet/>
    </>)
}
