import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";
const SharedLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <StyledNavbar />
      <Outlet />
    </div>
  );
};
export default SharedLayout;
