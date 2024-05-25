import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";
import Footer from "../Pages/Shared/Footer";
 
 
 

 
const MainLayout = () => {
    return (
        <div className="w-[1920px] mx-auto bg-base-100 border-8 border-blue-800 ">
          <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default MainLayout;