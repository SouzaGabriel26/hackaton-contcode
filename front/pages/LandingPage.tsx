import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
       <h1 className="">LandingPage</h1>
       <Link to="/signin">Criar conta</Link>
       <Link to="/signon">Entrar</Link>
    </div>
  )
}

export default LandingPage