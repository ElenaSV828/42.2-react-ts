import "./styles.ts";
import Button from "../Button/Button";
//Шаг 1 - импорт хука useState из react
// import { useState } from "react";
import { CounterContainer, ButtonWrapper, CounterResult } from './styles';
import { CounterProps } from "./types.js";

function Counter({ countValue, onMinus, onPlus }: CounterProps) {
  // console.log("Counter render or re-render");

  //Шаг 2 - вызываем хук useState и передаем в него первоначальное состояние(initialState)
  //делаем деструктуризацию массива из двух элементов, который возвращает хук useState
  // const [count, setCount] = useState<number|undefined>(0);
  // const [count, setCount] = useState<number>(0);

  // const result = useState(0);
  // console.log(result);
  // const count = result[0];
  // console.log(count);
  // const setCount = result[1];
  // console.log(setCount);


  //Шаг 3 - необходимо прописать функции, которые будут менять состояние. Внутри этих функций нужно использовать setCount
  // const onPlusClick = (): void => {
  //   setCount((prevValue) => prevValue + 1);
  // };

  // const onMinusClick = (): void => {
  //   setCount((prevValue) => prevValue - 1);
  // };

  return (
    <CounterContainer>
      <ButtonWrapper>
        <Button name="-" onClick={onMinus} />
      </ButtonWrapper>
      <CounterResult>{countValue}</CounterResult>
      <ButtonWrapper>
        <Button name="+" onClick={onPlus} />
      </ButtonWrapper>
    </CounterContainer>
  );
}

export default Counter;

/*function Counter() {
  console.log("Render");

  //Шаг 2 - вызываем хук useState и передаем в него первоначальное состояние(initialState)
  //делаем деструктуризацию массива из двух элементов, который возвращает хук useState
  //const [count, setCount] = useState<number|undefined>(0);
  const [count, setCount] = useState<number>(0);
  // const result = useState(0);
  // console.log(result);
  // const count = result[0];
  // console.log(count);
  // const setCount = result[1];
  // console.log(setCount);

  //Шаг 3 - необходимо прописать функции, которые будут менять состояние. Внутри этих функций нужно использовать setCount
  const onPlusClick = ():void => {
    setCount((prevValue) => prevValue + 1);
  };

  const onMinusClick = ():void => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <div className="counter-container">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinusClick} />
      </div>
      <div className="counter-result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
*/