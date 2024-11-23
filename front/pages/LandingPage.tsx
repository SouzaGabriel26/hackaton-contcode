import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
       <h1>LandingPage</h1>
       <Link to="/signin">Criar conta</Link>
       <Link to="/signin">Entrar</Link>
    </div>
  )
}

export default LandingPage