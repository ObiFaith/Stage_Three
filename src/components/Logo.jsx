import { Link } from "react-router-dom"
import { logo } from "../assets"

const Logo = () => {
  return (
    <Link to='/product' className="flex gap-2 items-center">
      <div className=""><img src={logo} alt="logo" /></div>
      <span className="text-lg md:text-xl lg:text-2xl text-green-600">MivaMart</span>
    </Link>
  )
}

export default Logo