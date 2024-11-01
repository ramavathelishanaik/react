import { NavLink } from "react-router-dom";
const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "gray",
          };
        }}
        // className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "gray",
          };
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "gray",
          };
        }}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "gray",
          };
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "gray",
          };
        }}
      >
        Dashboard
      </NavLink>
    </nav>
  );
};
export default StyledNavbar;
