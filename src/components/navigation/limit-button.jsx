import { useStockDataContext } from "../../context/data/stock-data";
export const LimitNavigation = () => {
  const { limit, setLimit } = useStockDataContext();

  const addData = () => {
    setLimit(limit + 5);
  };

  const removeData = () => {
    setLimit(limit - 5);
  };

  return (
    <>
      <div className="container flex justify-around flex-row mt-6 mb-12">
        <div>
          <button onClick={addData} className="underline text-white text-30">
            +
          </button>
          <button onClick={removeData} className="underline text-white text-30">
            -
          </button>
        </div>
      </div>
    </>
  );
};
