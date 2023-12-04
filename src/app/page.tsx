import {MainCard} from "./components/Card";
import ForecastCardGroup from "./components/ForecastCardGroup";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <main className="bg-leaves w-full xs:max-w-[430px] xs:w-xs px-4 overflow-x-auto py-8">
        <section className="flex flex-col items-start xs:items-center w-full xs:max-h-[764px]">
          <MainCard />
          <div className="min-w-[371px] flex justify-center">
            <h1 className="text-base text-white my-4 py-2 border-b text-center">
              Today&apos;s Forecasts
            </h1>
          </div>
          <ForecastCardGroup />
        </section>
      </main>
    </div>
  );
}
