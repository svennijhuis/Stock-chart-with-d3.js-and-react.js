import { useStockDataContext } from "../../context/data/stock-data";
export const InputBrand = ({ name, children, onChangeValue }) => {
  const { stock } = useStockDataContext();

  return (
    <>
      <div>
        <label
          className={`text-white text-20 underline ${
            stock === name ? "opacity-100" : "opacity-40"
          }`}
          htmlFor={name}
        >
          <input
            onChange={onChangeValue}
            type="radio"
            value={name}
            name="date"
            id={name}
            className="hidden"
          />
          {children}
        </label>
      </div>
    </>
  );
};
