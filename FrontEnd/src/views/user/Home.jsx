import NavBar from "../../components/user/NavBar";
import {Outlet} from "react-router-dom";

const Home = () => {
  return <>
      <NavBar />
      <Outlet />
  </>
};

export default Home;
