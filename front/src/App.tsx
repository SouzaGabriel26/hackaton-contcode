import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {

  return (
    <div className="h-full">
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route element={<Layout />}>
              <Route path="/dashboard/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-budget" element={<Create />} />
              <Route path="/history" element={<History />} />
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </div>
  )
}

export default App;
