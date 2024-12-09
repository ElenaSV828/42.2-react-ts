import "./styles.ts";
import { ButtonProps } from "./types";
import { MainButton } from './styles';

function Button({ name, type = "button", onClick, disabled = false }: ButtonProps) {
  // console.log(props.buttonName);

  return (
    <MainButton onClick={onClick} type={type} disabled={disabled}>
      {name}
    </MainButton>
  );
}

export default Button;


/*function Button({ name, type = "button", onClick}:ButtonProps) {
  // console.log(props.buttonName);

  return (
    <button onClick={onClick} className="main-button" type={type}>
      {name}
    </button>
  );
}

export default Button;
*/