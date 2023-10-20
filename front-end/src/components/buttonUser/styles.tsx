import styled from 'styled-components';

interface ContainerProps {
  google?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 15%;
  background-color: #303131;
  color: #ffffff;
  height: 40px;
  border: 20;
  border-radius: 10px;
  margin-left: 75%;
  margin-bottom: 0%;
  font-weight: 400;
  font-size: 20px;
  box-shadow: 2px 2px 4px rgb(114, 117, 126);
  font-weight: bold;
  font-family: helvetica;


  &:disabled {
    opacity: 0;
  }

  /* Conditional CSS style */
  ${({ google }) =>
    google &&
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;
