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
      <div className="absolute top-2 right-2 flex-col flex">
        <button
          onClick={addData}
          className=" text-black bg-white border-2 border-black w-3 h-3 text-30 flex justify-center items-center"
        >
          +
        </button>
        <button
          onClick={removeData}
          className=" text-black bg-white border-2 border-black w-3 h-3 text-30 flex justify-center items-center"
        >
          -
        </button>
      </div>
    </>
  );
};
