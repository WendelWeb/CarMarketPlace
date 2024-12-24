import { carList } from "../assets/Shared/FakeData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const MostSearchedCar = () => {
  console.log(carList);

  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center my-6">Most Searched Car</h2>
      <Carousel>
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <CarItem data={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchedCar;
