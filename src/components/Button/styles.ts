import styled from '@emotion/styled';

interface MainButtonProps {
  disabled: boolean;
}

export const MainButton = styled.button<MainButtonProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  background: ${({ disabled }) => disabled ? '#b8b6ae' : '#1f27f5'};
  border-radius: 4px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
`;



/*.main-button {
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  background: #1f27f5;
  border-radius: 4px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: pointer;
}

/* old styles */
/* .main-button {
  width: 300px;
  padding: 20px 30px;
  background-color: #1d2a55;
  font-size: 28px;
  color: aliceblue;
  border: none;
  border-radius: 4px;
} */
