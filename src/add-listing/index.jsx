import Header from "../components/Header";
import carDetails from "../assets/Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextArea from "./components/TextAreaField";
import { Separator } from "@radix-ui/react-select";
import features from "../assets/Shared/features.json";
import CheckboxField from "./components/CheckboxField";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { db } from "../../configs/index";
import { carListing } from "../../configs/schema";
import IconField from "./components/IconField";

const AddListing = () => {
  const [formData, setFormData] = useState([0]);
  const [featuresData, setFeaturesData] = useState([0]);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(featuresData);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const result = await db
        .insert(carListing)
        .values({ ...formData, features: featuresData });

      if (result) {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 py-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onFormSubmit(e);
          }}
          className="p-10 border rounded-xl mt-10"
        >
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
                  <label className="flex gap-2 items-center">
                    <IconField icon={item?.icon} />
                    {item.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      handleIputChange={handleInputChange}
                      item={item}
                    />
                  ) : (
                    item.fieldType == "dropdown" && (
                      <DropdownField
                        item={item}
                        handleInputChange={handleInputChange}
                      />
                    )
                  )}
                  {item.fieldType === "textarea" && (
                    <TextArea
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          {/* features list */}
          <div>
            <h2 className="font-medium">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3">
              {features?.features.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckboxField
                    item={item}
                    handleFeatureChange={handleFeatureChange}
                  />{" "}
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* car images  */}
          <div className="mt-5 flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
