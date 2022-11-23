// import {
//   // useMemo,
//   // useContext,
//   // createContext,
//   useState,
// } from "react";
// // import useSWR from "swr";

// // const GlobalStoreContext = createContext();

// // export function GlobalStoreProvider(props) {
// //   const fetcher = (url) => fetch(url).then((res) => res.json());
// //   const { data: dataGlobal } = useSWR(
// //     `http://localhost:3004/TimeSeries`,
// //     fetcher
// //     // { refreshInterval: 1000 }
// //   );

// //   const value = useMemo(() => ({ dataGlobal }), [dataGlobal]);
// //   return <GlobalStoreContext.Provider value={value} {...props} />;
// // }

// // export function useGlobalStore() {
// //   const context = useContext(GlobalStoreContext);
// //   if (!context) {
// //     throw new Error("You forgot to wrap GlobalStoreProvider");
// //   }

// //   return context;
// // }
// import { GlobalDataContext } from "./GlobalDataContext";
// // import defaultConfig from "@config/defaultConfig";

// /**
//  * Wrapper to make a Provider for the GlobalDataContext.
//  * @returns {React.Provider<GlobalDataContext>}
//  */
// const GlobalDataProvider = ({ children }) => {
//   const [globalContext, setGlobalContext] = useState({});
//   fetch(
//     "https://opensheet.elk.sh/1tO9SS1f9RQZ0Ay0BmkczJVkCxWcAhzGtcSDpzheKTZI/responses"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       setGlobalContext(data);
//     });
//   return (
//     <GlobalDataContext.Provider value={{ globalContext }}>
//       {children}
//     </GlobalDataContext.Provider>
//   );
// };

// export default GlobalDataProvider;
