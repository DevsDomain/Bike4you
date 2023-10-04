import styled from 'styled-components';

interface ContainerProps {
  google?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  background-color: #5ca3be97;
  color: #ffffff;
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  margin-bottom: 20px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;

  &:disabled {
    opacity: 0.5;
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
