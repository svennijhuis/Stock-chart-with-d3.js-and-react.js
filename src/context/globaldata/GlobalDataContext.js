import { createContext, useContext } from 'react';

/**
 * This is the context that we use to store all the values from the forms
 * to make them globally available for all other steps.
 */
const GlobalDataContext = createContext(false);
GlobalDataContext.displayName = 'Global Data Context';

/**
 * Hook to use the global data context.
 * @returns {React.Context}
 */
const useGlobalDataContext = () => useContext(GlobalDataContext);

export { GlobalDataContext, useGlobalDataContext };