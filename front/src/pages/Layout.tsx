import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

const Layout = () => {
  return (
    <div>
      <SideBar/>
      <div className="justify-center flex items-center">
      <Outlet/>
      </div>
    </div>
  )
}

export default Layout