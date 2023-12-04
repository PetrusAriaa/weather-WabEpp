import {Button, Card, Skeleton} from "@nextui-org/react";
import {FiChevronsDown, FiMapPin} from "react-icons/fi";

export const MainCard = () => {
  return (
    <>
      <div className="flex flex-col px-1 xs:px-4 py-8 items-center bg-gradient-to-bl from-slate-500/50 to-slate-500/30 backdrop-blur-md w-full rounded-2xl shadow-md text-white border-t border-r border-t-white/50 border-r-white/50">
        <div className="flex flex-col items-center">
          <Button
            radius="full"
            className="bg-transparent shadow-none text-base py-2 px-5 inline text-white my-2"
          >
            <span>
              <FiMapPin className="inline" />
            </span>{" "}
            Sleman, Yogyakarta
          </Button>
          <Skeleton className="bg-slate-200/30 rounded-2xl">
            <div className="rounded-2xl w-32 aspect-square"></div>
          </Skeleton>
          <p className="text-md xs:text-lg p-2 uppercase font-semibold">
            moderate rain
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 mt-8  ">
          <Card
            isPressable
            about="temperature"
            className="flex flex-col items-center p-2 bg-transparent shadow-none text-white"
          >
            <h1 className="text-sm xs:text-base uppercase">temperature </h1>
            <p className="text-md xs:text-lg uppercase">
              29.5<span className="text-sm xs:text-base"> &deg;C </span>
            </p>
            <FiChevronsDown className="w-4 h-4 text-white/50 animate-bounce" />
          </Card>
          <div className="border-l h-5" />
          <Card
            isPressable
            about="wind speed"
            className="flex flex-col items-center p-2 bg-transparent shadow-none text-white"
          >
            <h1 className="text-sm xs:text-base uppercase">wind</h1>
            <p className="text-md xs:text-lg">
              110<span className="text-sm xs:text-base"> mph </span>
            </p>
            <FiChevronsDown className="w-4 h-4 text-white/50 animate-bounce" />
          </Card>
          <div className="border-l h-5" />
          <Card
            isPressable
            about="sunrise"
            className="flex flex-col items-center p-2 bg-transparent shadow-none text-white"
          >
            <h1 className="text-sm xs:text-base uppercase">sunrise</h1>
            <p className="text-md xs:text-lg uppercase">
              12<span className="text-sm xs:text-base"> H </span> 30
              <span className="text-sm xs:text-base"> M </span>
            </p>
            <FiChevronsDown className="w-4 h-4 text-white/50 animate-bounce" />
          </Card>
        </div>
        <div className="my-4 w-1/2">
          <Button
            fullWidth
            radius="full"
            className="backdrop-filter bg-transparent bg-gradient-to-bl from-slate-100/30 to-slate-100/10  border-t border-r border-t-white/50 border-r-white/50 text-white"
          >
            Details
          </Button>
        </div>
      </div>
    </>
  );
};
