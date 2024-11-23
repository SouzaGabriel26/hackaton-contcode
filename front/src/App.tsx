import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage"
import Signin from "../pages/Signin"
import Signon from "../pages/Signon"

function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signon" element={<Signon/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
