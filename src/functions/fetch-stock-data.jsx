export const fetchData = async (stock, date) => {
  const {REACT_APP_API} = process.env;
  
  // const response = await fetch(`http://127.0.0.1:5500/${stock}-${date}.json`);
  const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_${date}_ADJUSTED&symbol=${stock}&apikey=${REACT_APP_API}`);
  const data = await response.json();
  return data;
};
 