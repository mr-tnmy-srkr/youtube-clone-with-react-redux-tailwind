import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div className="text-center max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="flex w-full">
        <div className={`${open ? "w-[200px]" : "w-[100px]"}`}>
          <Sidebar />
        </div>
        <div
          className={`${
            open ? "w-[calc(100vw-220px)]" : "w-[calc(100vw-100px)]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MainLayouts;
