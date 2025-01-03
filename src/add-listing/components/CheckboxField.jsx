import { Checkbox } from "../../components/ui/checkbox";

const CheckboxField = ({ item, handleFeatureChange }) => {
  return (
    <div>
      <Checkbox
        onCheckedChange={(value) => handleFeatureChange(item.name, value)}
      />
    </div>
  );
};

export default CheckboxField;
