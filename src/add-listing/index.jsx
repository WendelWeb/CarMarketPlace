import Header from "../components/Header";
import carDetails from '../assets/Shared/carDetails.json'
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextArea from "./components/TextAreaField";


const AddListing = () => {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 py-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form action="" className="p-10 border rounded-xl mt-10">
          {/* car details */}
          <div>
            <h2 className="font-medium text-xl mb-6">car details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {carDetails.carDetails.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.fieldType == "textarea" &&
                    "my-custom-breakpoint:col-span-2"
                  }`}
                >
                  <label className="">
                    {item.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField item={item} />
                  ) : (
                    item.fieldType == "dropdown" && (
                      <DropdownField item={item} />
                    )
                  )}
                  {item.fieldType === "textarea" && <TextArea />}
                </div>
              ))}
            </div>
          </div>
          {/* features list */}

          {/* car images  */}
        </form>
      </div>
    </div>
  );
};

export default AddListing;
