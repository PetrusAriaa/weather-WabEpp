import {Card, Skeleton} from "@nextui-org/react";
import {FiThermometer} from "react-icons/fi";
import {IoWaterOutline} from "react-icons/io5";

const ForecastCard = () => {
  return (
    <>
      <div className="flex flex-col items-center px-6 py-2 min-w-fit text-white rounded-xl bg-gradient-to-bl from-slate-500/50 to-slate-500/30 backdrop-filter border-t border-r border-t-white/50 border-r-white/50">
        <h1 className="py-2">6.00 pm</h1>
        <div>
          <Skeleton className="rounded-lg">
            <div className="w-16 aspect-square"></div>
          </Skeleton>
        </div>
        <p className="uppercase text-base text-white py-2">moderate rain</p>
        <div className="w-full flex flex-col items-start">
          <p className="inline text-base">
            <span>
              <FiThermometer className="inline" />
            </span>
            20 <span>&deg;C</span>
          </p>
          <p className="inline text-base">
            <span>
              <IoWaterOutline className="inline" />
            </span>
            30.0 <span>pa</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForecastCard;
