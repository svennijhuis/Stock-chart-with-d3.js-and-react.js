import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { fetchData } from "../../functions/fetch-stock-data";

/**
 * This is the context that we use to store all the values from the forms
 * to make them globally available for all other steps.
 */
const StockDataContext = createContext(false);
StockDataContext.displayName = "Stock Data Context";

/**
 * Hook to use the Stock data context.
 * @returns {React.Context}
 */
const useStockDataContext = () => useContext(StockDataContext);

/**
 * Wrapper to make a Provider for the StockDataContext.
 * @returns {React.Provider<StockDataContext>}
 */
const StockDataProvider = ({ children }) => {
  const [stock, setStock] = useState("aapl");
  const [date, setDate] = useState("monthly");
  const [rawData, setRawData] = useState([]);

  const [limit, setLimit] = useState(125);

  const data = useMemo(() => {
    return rawData.slice(0, limit).reverse();
  }, [rawData, limit]);

  useEffect(() => {
    fetchData(stock, date).then((data) => {
      const { "Meta Data": metaData, ...rest } = data;
      const timeData = Object.values(rest)[0];

      let dataArray = Object.entries(timeData).map(([key, value]) => ({
        time: key,
        open: +value["1. open"],
        hight: +value["2. high"],
        low: +value["3. low"],
        close: +value["4. close"],
        volume: +value["5. volume"],
      }));

      setRawData(dataArray);
    });
  }, [stock, date]);

  return (
    <StockDataContext.Provider
      value={{ stock, setStock, date, setDate, limit, setLimit, data }}
    >
      {children}
    </StockDataContext.Provider>
  );
};

export default StockDataProvider;

export { StockDataContext, useStockDataContext };
