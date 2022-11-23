export const fetchData = async (stock, date) => {
  const response = await fetch(`http://127.0.0.1:5500/${stock}-${date}.json`);
  const data = await response.json();
  return data; 
};
