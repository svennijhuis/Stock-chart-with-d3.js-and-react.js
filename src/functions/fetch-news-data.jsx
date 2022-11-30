export const fetchDataNews = async () => {
  const { REACT_APP_API } = process.env;

  const response = await fetch(
    `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology,finance&apikey=${REACT_APP_API}&sort=LATEST&limit=50`
  );
  // const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_${date}_ADJUSTED&symbol=${stock}&apikey=${REACT_APP_API}`);
  const data = await response.json();
  return data;
};
