import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useSidebarContext } from "../context/SidebarContext";

const Layout = () => {
  const { isSidebarOpen } = useSidebarContext();

  const sidebarWidth = isSidebarOpen ? "ml-[256px]" : "ml-[80px]"

  return (
    <div className="h-full">
      <SideBar />

      <div className={`${sidebarWidth} flex justify-center`}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
