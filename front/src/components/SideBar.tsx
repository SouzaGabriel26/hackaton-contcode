import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaCogs,
  FaHistory,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa"; // Importando ícones

const SideBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`transition-all duration-300 fixed top-0 left-0 h-screen z-30 bg-white shadow-lg text-darkRed flex flex-col ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Botão de expandir/minimizar no canto superior direito da sidebar */}
      <div
        className="absolute top-4 right-0 cursor-pointer"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <FaArrowLeft className="text-xl" />
        ) : (
          <FaArrowRight className="text-xl" />
        )}
      </div>

      {/* Logo ou Título */}
      <div className="p-6 border-b border-gray-200">
        <h2 className={`text-3xl font-bold ${!isSidebarOpen ? "hidden" : ""}`}>
          Menu
        </h2>
      </div>

      {/* Navegação */}
      <nav className="flex-1">
        <ul>
          {/* Dashboard */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center p-4 transition ${
                  isActive
                    ? "bg-lightRed text-white font-bold"
                    : "hover:bg-lightRed hover:text-white text-darkRed"
                }`
              }
            >
              <FaHome
                className={`${
                  !isSidebarOpen ? "ml-0" : "ml-3"
                } text-xl transition-colors duration-200`}
              />
              <span
                className={`${
                  !isSidebarOpen ? "hidden" : ""
                } ml-3 transition-colors duration-200`}
              >
                Principal
              </span>
            </NavLink>
          </li>
          {/* Profile */}
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center p-4 transition ${
                  isActive
                    ? "bg-lightRed text-white font-bold"
                    : "hover:bg-lightRed hover:text-white text-darkRed"
                }`
              }
            >
              <FaUserAlt
                className={`${
                  !isSidebarOpen ? "ml-0" : "ml-3"
                } text-xl transition-colors duration-200`}
              />
              <span
                className={`${
                  !isSidebarOpen ? "hidden" : ""
                } ml-3 transition-colors duration-200`}
              >
                Editar perfil
              </span>
            </NavLink>
          </li>
          {/* Criar orçamento */}
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center p-4 transition ${
                  isActive
                    ? "bg-lightRed text-white font-bold"
                    : "hover:bg-lightRed hover:text-white text-darkRed"
                }`
              }
            >
              <FaCogs
                className={`${
                  !isSidebarOpen ? "ml-0" : "ml-3"
                } text-xl transition-colors duration-200`}
              />
              <span
                className={`${
                  !isSidebarOpen ? "hidden" : ""
                } ml-3 transition-colors duration-200`}
              >
                Criar orçamento
              </span>
            </NavLink>
          </li>
          {/* Histórico de orçamentos */}
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `flex items-center p-4 transition ${
                  isActive
                    ? "bg-lightRed text-white font-bold"
                    : "hover:bg-lightRed hover:text-white text-darkRed"
                }`
              }
            >
              <FaHistory
                className={`${
                  !isSidebarOpen ? "ml-0" : "ml-3"
                } text-xl transition-colors duration-200`}
              />
              <span
                className={`${
                  !isSidebarOpen ? "hidden" : ""
                } ml-3 transition-colors duration-200`}
              >
                Histórico de orçamentos
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Rodapé */}
      <footer className="p-4 text-center text-sm text-gray-500 border-t border-gray-200"></footer>
    </div>
  );
};

export default SideBar;