import ForecastCard from "./ForecastCard";
import {ScrollShadow} from "@nextui-org/react";

const ForecastCardGroup = () => {
  return (
    <ScrollShadow
      orientation="horizontal"
      hideScrollBar
      className="flex flex-row max-w-[371px] overflow-x-auto gap-4 bg-transparent"
    >
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </ScrollShadow>
  );
};

export default ForecastCardGroup;
