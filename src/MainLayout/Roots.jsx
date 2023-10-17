import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar";
import Footer from "../Components/Footer/Footer";


const Roots = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;