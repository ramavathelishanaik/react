import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <GlobalContext.Provider value={{ sidebar, setSidebar, modal, setModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired, // 'node' represents any renderable content
};

export default AppContext;
