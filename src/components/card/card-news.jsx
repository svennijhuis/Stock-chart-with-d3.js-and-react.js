import { useStockDataContext } from "../../context/data/stock-data";
import { Loading } from "../loading/loading";

export const CardNews = () => {
  const { newsData } = useStockDataContext();

  if (!newsData)
    return (
      <div className=" p-1 mt-12 md:mt-0 relative">
        <Loading />
        <p className="text-white text-14 leading-20 text-center">
          We gaan te snel de API kan her niet aan. Wacht 1 minuut en herlaadt de
          pagina!
        </p>
      </div>
    );

  return (
    <>
      <article className="flex flex-col gap-4 mt-12 md:mt-0">
        {newsData.slice(0, 4).map((data, index) => (
          <a className="flex flex-col hover-card" href={data.url} key={data.title + index}>
            <h2 className="text-white font-bold text-18">{data.title}</h2>
            <p className="text-white font-light text-10 mb-2">{data.source}</p>
            <div className="flex flex-wrap gap-1 flex-row">
              {data.topics.map((x, index) => (
                <p key={x.topic + index + data.title} className="text-white text-13 px-1 py-[0.5px] border-[0.5px] w-fit rounded-3xl ">
                  {x.topic}
                </p>
              ))}
            </div>
          </a>
        ))}
      </article>
    </>
  );
};
