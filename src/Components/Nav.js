import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 " to="/">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/13/00/58/coffee-31496_960_720.png"
            alt=""
            className="logo-img"
          />
          WBC
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto fw-bolder mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
                className="nav-link"
                to="/employees"
              >
                Employees
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
                className="nav-link"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1" to="/login"></i> Login
            </NavLink>
            <NavLink to="/signup" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
{
  /* <NavLink
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
      </NavLink>*/
}
