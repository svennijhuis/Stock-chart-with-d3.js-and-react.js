import { Header } from "./Header";
import { Footer } from "./Footer";
import { CardNews } from "../card/card-news";
import { CandleStickChart } from "../charts/candlestickChart";
import { useRef, useEffect } from "react";
import { useScreenContext } from "../../context/Screen/ScreenProvider";
import { NavigationDate } from "../navigation/navigation-date";
import { StockInformation } from "../information/stock-information";

export const Main = () => {
  const svgContainer = useRef(null);
  const { setWidth, setHeight } = useScreenContext();

  const getSvgContainerSize = () => {
    const newWidth = svgContainer.current.clientWidth;
    setWidth(newWidth);

    const newHeight = svgContainer.current.clientHeight;
    setHeight(newHeight);
  };

  useEffect(() => {
    // detect 'width' and 'height' on render
    getSvgContainerSize();
    // listen for resize changes, and detect dimensions again when they change
    window.addEventListener("resize", getSvgContainerSize);
    // cleanup event listener
    return () => window.removeEventListener("resize", getSvgContainerSize);
  });

  return (
    <>
      <Header />
      <main>
        <div className="container grid grid-cols-8 gap-3">
          <div className="col-span-8">
            <StockInformation />
          </div>
          <div className="col-span-8 sticky top-8 right-0 left-0 z-10 bg-[#17171a] py-1">
            <div className="grid gap-2">
              <NavigationDate />
            </div>
          </div>
          <section
            ref={svgContainer}
            className="col-span-8 md:col-span-6 relative md:mr-3"
          >
            <CandleStickChart />
          </section>
          <section className="col-span-8 md:col-span-2">
            <CardNews />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
