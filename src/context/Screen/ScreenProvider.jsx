import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";

/**
 * Context to know which screen size we are currently in.
 */
const ScreenContext = createContext(false);
ScreenContext.displayName = "Screen Size Context";

/**
 * Hook to use the screen context.
 * @returns {React.Context}
 */
const useScreenContext = () => useContext(ScreenContext);

export { ScreenContext, useScreenContext };

/**
 * Wrapper to make a Provider for the GlobalDataContext.
 * @returns {React.Provider<GlobalDataContext>}
 */
const ScreenProvider = ({ children }) => {
  // const [screenSize, setScreenSize] = useState(null);

  const [screenSize, setScreenSize] = useState(() => {
    console.log("run");
    return null;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1199px)");

    if (mediaQuery.matches) {
      console.log("Desktop");
      setScreenSize("desktop");
    } else {
      console.log("mobile");
      setScreenSize("mobile");
    }

    mediaQuery.addEventListener("change", ({ matches }) => {
      if (matches) {
        setScreenSize("desktop");
        console.log("Desktop");
      } else {
        console.log("mobile");
        setScreenSize("mobile");
      }
    });
  }, []);

  return (
    <ScreenContext.Provider value={screenSize}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
