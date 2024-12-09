import styled from '@emotion/styled';

export const InputContainer= styled.div`
display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

`;
export const Label= styled.label`
font-size: 16px;
color: #6f6f6f;

`;
export const InputElement= styled.input`
width: 100%;
height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;

&&::placeholder{
  color: #a19f9f;
}
`;

//.input-container {
 // display: flex;
  //flex-direction: column;
 // gap: 4px;
  //width: 100%;
//}

//label {
  //font-size: 16px;
 // color: #6f6f6f;
//}

//.input-element {
 // height: 50px;
  //width: 100%;
  //padding: 12px;
  //outline: none;
 // border: 1px solid black;
 // border-radius: 4px;
 // font-size: 16px;
//}

//.input-element::placeholder {
  //color: #a19f9f;
//}