import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav() {
    return (
        <nav>
          {/* The NavLink component is the same as a link, but it automatically
          applies a class of active to whichever one is active */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
    )
}

export default Nav