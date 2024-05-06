import { createContext, useContext, useState } from "react";
import { useInView } from "react-intersection-observer";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);

const AppContextProvider = (props) => {
  const [anchor, setAnchor] = useState("HOME");

  return (
    <AppContext.Provider value={{ anchor, setAnchor }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, MyContext, AppContextProvider };
