import { useStockDataContext } from "../../context/data/stock-data";

export const InputDate = ({ onChangeValue, time, name }) => {
  const { date } = useStockDataContext();

  return (
    <>
      <div>
        <label
          className={`text-white text-16 ${
            date === time ? "opacity-100 underline" : "opacity-40"
          }`}
          htmlFor={time}
        >
          <input
            onChange={onChangeValue}
            type="radio"
            value={time}
            name="date"
            id={time}
            className="hidden"
          />
          {name}
        </label>
      </div>
    </>
  );
};
