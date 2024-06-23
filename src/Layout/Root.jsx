import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import useRole from "../hooks/useRole";
import Approval from "../pages/Approvale/Approval";

const Root = () => {
    const [role, isLoading] = useRole()
    if (role === 'guest' && !isLoading) {
        return <Approval />;
      }
    return (
        <div className="relative min-h-screen md:flex">
            <div className="">
            <SideBar></SideBar>
            </div>
            <div className="flex-1 md:ml-64">
             <div className="p-5">
             <Outlet></Outlet>
             </div>
            </div>
        </div>
    );
};

export default Root;