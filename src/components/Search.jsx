import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.scss";
import { carBrands, pricingRange } from "../constants/data";
export const formatNumberWithComma = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};
const Search = () => {
  

  console.log(formatNumberWithComma(345678));

  const triggerClassNames =
    "outline-none md:border-none w-full shadow-none text-lg";
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
      <Select>
        <SelectTrigger className={triggerClassNames}>
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="old">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <Select>
        <SelectTrigger className={triggerClassNames}>
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">all</SelectItem>
          {carBrands.map((item) => (
            <SelectItem key={item.id} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <Select onValueChange={(e)=> console.log(e)
      }>
        <SelectTrigger className={triggerClassNames}>
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent >
          <SelectItem value="all">All</SelectItem>
          {pricingRange.map((item, index) => (
            <>
              {item.amount.length > 1 ? (
                <SelectItem key={item.id} value={item.amount}>
                  {`$${formatNumberWithComma(
                    item.amount[0]
                  )} - $${formatNumberWithComma(item.amount[1])}`}
                </SelectItem>
              ) : (
                <SelectItem key={item.id} value={index === 0? -item.amount[0] : item.amount[0]}>
                  {`${index === 0 ? "-" : "+"} $${formatNumberWithComma(
                    item.amount[0]
                  )}`}
                </SelectItem>
              )}
            </>
          ))}
        </SelectContent>
      </Select>
      $
      <div
        className={`${styles.searchDiv} w-full flex justify-center transition-all pointer py-2 rounded-sm`}
      >
        <CiSearch className="text-[40px] bg-primary rounded-full p-1.5"/>
      </div>
    </div>
  );
};

export default Search;
