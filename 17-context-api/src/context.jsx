import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

const AppContext = (props) => {
  const [name, setName] = useState("Elisha Naik");

  //   const contextValue = useMemo(() => {
  //     return {
  //       name,
  //       setName,
  //     };
  //   }, []);

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired, // 'node' represents any renderable content
};

// In the code above, PropTypes.node is used to indicate that the
// children prop can be any renderable content: strings, numbers,
//  JSX elements, arrays, etc. The .isRequired part ensures
//  that the children prop is required for the component to work correctly.

export default AppContext;
