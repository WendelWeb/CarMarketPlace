import Search from "./Search";


const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">Find Car For Sale And For Rent Near You</h2>
        <h2 className="text-[60px] font-bold">Find Your Dream Car</h2>
        <Search />
        <img src="/tesla.png" alt="tesla-hero-background-image" />
      </div>
    </div>
  );
};

export default Hero;
