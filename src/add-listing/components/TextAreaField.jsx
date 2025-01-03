import { Textarea } from '../../components/ui/textarea'

const TextArea = ({item, handleInputChange}) => {
  return (
    <Textarea
      className="resize-none"
      placeholder="Décrivez votre véhicule en quelques mots"
      onChange={(e) => handleInputChange(item.name, e.target.value)}
      required={item.required}
    />
  );
}

export default TextArea
