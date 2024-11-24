import React, { ReactNode, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCogs,
  FaHistory,
  FaHome,
  FaSignOutAlt,
  FaUserAlt
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useSidebarContext } from "../context/SidebarContext";

type NavigationLink = {
  path: string;
  label: string;
  icon: ReactNode
}

const navigationLinks: NavigationLink[] = [
  {
    path: "/dashboard",
    label: "Principal",
    icon: <FaHome className="text-xl" />
  },
  {
    path: "/profile",
    label: "Editar perfil",
    icon: <FaUserAlt className="text-xl" />
  },
  {
    path: '/create-budget',
    label: 'Criar orçamento',
    icon: <FaCogs className="text-xl" />
  },
  {
    path: '/history',
    label: 'Histórico de orçamentos',
    icon: <FaHistory className="text-xl" />
  }
]

const SideBar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  const [isItemsVisible, setIsItemsVisible] = useState(true);

  const { signOut } = useAuthContext();

  return (
    <div
      className={`transition-all duration-100 fixed top-0 left-0 h-screen z-30 bg-white shadow-lg text-darkRed flex flex-col ${isSidebarOpen ? "w-64" : "w-20"}`}
      onTransitionEnd={() => {
        if (isSidebarOpen) {
          setIsItemsVisible(true);
        }
      }}
    >
      <div className={`p-4 h-16 border-b border-gray-200 flex items-center ${isSidebarOpen ? 'justify-between' : ''}`}>
        <h2 className={`text-2xl font-bold ${!isSidebarOpen ? "hidden" : ""}`}>
          Menu
        </h2>

        <div
          className={`cursor-pointer ${!isSidebarOpen ? 'flex justify-center w-full' : ''}`}
          onClick={() => {
            toggleSidebar();
            if (isSidebarOpen) {
              setIsItemsVisible(false);
            }
          }}
        >
          {isSidebarOpen ? (
            <FaArrowLeft className="text-xl" />
          ) : (
            <FaArrowRight className="text-xl" />
          )}
        </div>
      </div>

      <nav className="flex-1">
        {
          navigationLinks.map(({ path, icon, label }) => (
            <NavLink
              key={path}
              to={path}
              title={label}
              className={({ isActive }) => `
                flex
                items-center
                p-4
                gap-4
                transition
                ${isActive
                  ? "bg-lightRed text-white justify-start font-bold"
                  : "hover:bg-lightRed hover:text-white text-darkRed"
                }
                ${!isSidebarOpen ? "justify-center" : ""}
                `
              }
            >
              {icon}
              <span className={!isItemsVisible ? 'hidden' : ''}>
                {label}
              </span>
            </NavLink>
          ))
        }
      </nav>

      <footer className="p-4 text-center text-sm text-gray-500 border-t border-gray-200">
        <button
          onClick={signOut}
          title="Sair"
          className={`
            w-full
            disabled:opacity-50
            disabled:pointer-events-none
            py-2
            px-4
            bg-lightRed
            text-white
            rounded-md
            shadow
            hover:bg-darkRed
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          `}
        >
          {
            isSidebarOpen ? 'Sair' : <FaSignOutAlt />
          }
        </button>
      </footer>
    </div>
  );
};

export default SideBar;
