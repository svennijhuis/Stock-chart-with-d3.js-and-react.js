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
        <InputDate time="DAILY" name="DAILY" onChangeValue={onChangeValue} />
        <InputDate time="WEEKLY" name="WEEKLY" onChangeValue={onChangeValue} />
        <InputDate
          time="MONTHLY"
          name="MONTHLY"
          onChangeValue={onChangeValue}
        />
      </div>
    </>
  );
};
