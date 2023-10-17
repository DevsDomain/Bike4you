import styled from 'styled-components';

interface ContainerProps {
  google?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 15%;
  background-color: #2b627c;
  color: #ffffff;
  height: 40px;
  border: 35;
  border-radius: 15px;
  margin-left: 755px;
  font-weight: 400;
  font-size: 20px;
  box-shadow: 2px 2px 4px rgba(14, 3, 3, 0.993);
  font-weight: bold;
  font-family: arial;


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
