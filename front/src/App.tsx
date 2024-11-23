import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Layout from "./pages/Layout"
import History from "./pages/History";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
  <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>

        <Route element={<Layout/>}>
          <Route path="/dashboard/" element={<Dashboard/>}/>
          <Route path="/dashboard/profile" element={<Profile/>}/>
          <Route path="/dashboard/create" element={<Create/>}/>
          <Route path="/dashboard/history" element={<History/>}/>
        </Route>

        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
