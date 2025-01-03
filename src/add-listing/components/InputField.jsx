import { Input } from "../../components/ui/input";

const InputField = ({ handleIputChange, item }) => {
  return (
    <div>
      <Input
        type={item?.fieldType}
        name={item?.name}
        required={item?.required}
        onChange={(e) => handleIputChange(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default InputField;
