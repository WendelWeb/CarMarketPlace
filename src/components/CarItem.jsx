/* eslint-disable react/prop-types */

import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { formatNumberWithComma } from "./Search";
import { IoMdOpen } from "react-icons/io";

const CarItem = ({ data }) => {
  return (
    <div className="rounded-xl border bg-white hover:shadow-md cursor-pointer">
      <h2 className="absolute m-2 bg-green-500 rounded-full px-2 font-bold  text-white">New</h2>
      <img
        src={data?.image}
        width={'100%'}
        height={250}
        alt=""
        className="rounded-t-xl"
      />
      <div className="p-4 ">
        <h2 className="font-bold text-black text-lg mb-2">{data.name}</h2>
        <Separator />
        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col justify-center items-center">
            <LuFuel />
            <h2 className="text-center">{data.miles} miles</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <TbBrandSpeedtest />
            <h2>{data.fuelType}</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GiGearStickPattern />
            <h2>{data.gearType}</h2>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-1xl">
            ${formatNumberWithComma(parseInt(data.price))}
          </h2>
          <h2 className="text-primary text-sm flex items-center gap-1">
            view details
            <IoMdOpen />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
