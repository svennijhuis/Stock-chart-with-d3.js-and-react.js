import { Header } from "./Header";
import { Footer } from "./Footer";
import { CardNews } from "../card/card-news";
import { CandleStickChart } from "../charts/candlestickChart";

export const Main = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid grid-cols-8 gap-3">
          <section className="col-span-5 overflow-x-scroll relative">
            <CandleStickChart />
          </section>
          <section className="col-span-3">
            <CardNews />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
