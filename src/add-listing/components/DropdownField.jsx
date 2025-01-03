import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";



const DropdownField = ({item, handleInputChange}) => {
  return (
    <Select required={item.required} onValueChange={(value)=> handleInputChange(item.name, value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={`${item?.label}`} />
      </SelectTrigger>
      <SelectContent>
        {item?.options.map((option, index)=>(
            <SelectItem value={option} key={index}>{option}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};



export default DropdownField;
