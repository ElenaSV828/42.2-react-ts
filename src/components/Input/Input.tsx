import "./styles.ts";
import { InputProps } from './types';
import { ErrorMessage, InputContainer, InputElement, Label } from './styles';

function Input({ name, id, type = 'text', placeholder, label, value, onChange, error }: InputProps) {
  // console.log("Input render or re-render");

  return (
    <InputContainer>
      {/* Пример оператора условного рендеринга */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-element"
      />
      <ErrorMessage>{error}</ErrorMessage>
      {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </InputContainer>
  );
}

export default Input;


//function Input({ name, id, type = 'text', placeholder, label }: InputProps) {
  //return (
    //<div className="input-container">
    //  {/* Пример оператора условного рендеринга */}
      //{label && <label htmlFor={id}>{label}</label>}
      //<input
        //id={id}
        //name={name}
        //type={type}
       // placeholder={placeholder}
        //className="input-element"
      ///>
    //</div>
  //);
//}

//export default Input;