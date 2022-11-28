import { createContext, useContext, useState, useEffect } from "react";

/**
 * This is the context that we use to store all the values from the forms
 * to make them globally available for all other steps.
 */
const ScreenContext = createContext(false);
ScreenContext.displayName = "Screen Context";

/**
 * Hook to use the Stock data context.
 * @returns {React.Context}
 */
const useScreenContext = () => useContext(ScreenContext);

/**
 * Wrapper to make a Provider for the ScreenContext.
 * @returns {React.Provider<ScreenContext>}
 */
const ScreenProvider = ({ children }) => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {

  }, [width, height]);

  return (
    <ScreenContext.Provider value={{ width, setWidth, height, setHeight }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;

export { ScreenContext, useScreenContext };
