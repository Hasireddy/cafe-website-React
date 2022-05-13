import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
        className="nav-link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
        className="nav-link"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
        className="nav-link"
        to="/employees"
      >
        Employees
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
        className="nav-link"
        to="/gallery"
      >
        Gallery
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
        className="nav-link"
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  );
}
