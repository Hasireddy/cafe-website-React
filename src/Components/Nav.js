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
        to="/component1"
      >
        Component1
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
        className="nav-link"
        to="/Component2"
      >
        Component2
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
        className="nav-link"
        to="/Component3"
      >
        Component3
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
        className="nav-link"
        to="/Component4"
      >
        Component4
      </NavLink>
    </div>
  );
}
