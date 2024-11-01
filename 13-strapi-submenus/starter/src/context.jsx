import { useState, createContext } from "react";
import PropTypes from "prop-types";
import sublinks from "./data";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const pages = sublinks.find((link) => link.page === text);
    setPage(pages);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
