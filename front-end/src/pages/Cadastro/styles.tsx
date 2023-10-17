import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2F2F2F;
  
  h3{
    text-align: center;
  }

`;

export const Box = styled.div`
  max-width: 800px;
  margin: auto;
  border-radius: 10px;
  background-color: #B6B6B6;
  padding: 20px;

  @media (max-width: 768px) {
    margin: 100px 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Alinhar à esquerda */
  text-align: stretch; /* Alinhar o texto à esquerda */

  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  img {
    max-width: 150px; /* Largura máxima da imagem de exemplo */
    height: auto;
    margin-right: 20px;
    border-radius: 10px;
  }
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  color: #000000;
  background: #ffffff;
  border: 0;
  border-color: transparent;

  &::placeholder {
    color: #000000; /* Cor do placeholder branca */
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  color: #000000;
  background: #ffffff;
  border: 0;
  border-color: transparent;
  border-radius: 10px; /* Arredondar bordas */
  min-height: 150px; /* Altura mínima do campo de descrição */

  &::placeholder {
    color: #000000;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  select {
    height: 30px;
    width: 100%;
    margin-top: 8px;
    padding: 8px;
    color: #000000;
    background: #ffffff;
    border: 0;
    border-color: transparent;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

