import { createContext, useContext, useState } from "react";

type SidebarContext = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext({} as SidebarContext);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebarContext() {
  return useContext(SidebarContext);
}
