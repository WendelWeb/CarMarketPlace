import { categories } from "../constants/data";

const Categories = () => {
  return (
    <div className="mt-20 p-10">
      <h2 className="font-bold text-3xl text-center mb-6">Browse by type</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {categories.map((item)=>(
          <div key={item.id} className="cursor-pointer border rounded-xl p-3 flex items-center flex-col hover:shadow-md">
            <img src={item.icon} width={35} height={35} alt={`${item.name}-icon`} />
            <h2 className="mt-2">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
