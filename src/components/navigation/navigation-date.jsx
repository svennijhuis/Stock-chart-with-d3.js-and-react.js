import { useStockDataContext } from "../../context/data/stock-data";
import { InputDate } from "./input-date";
export const NavigationDate = () => {
  const { setDate } = useStockDataContext();

  const onChangeValue = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div className="flex flex-row gap-2">
        <InputDate time="daily" name="Daily" onChangeValue={onChangeValue} />
        <InputDate time="weekly" name="Weekly" onChangeValue={onChangeValue} />
        <InputDate
          time="monthly"
          name="Monthly"
          onChangeValue={onChangeValue}
        />
      </div>
    </>
  );
};
