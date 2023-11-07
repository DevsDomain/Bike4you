import styled from 'styled-components';

export const Container = styled.div`
  overflow: visible;
  h3{
    text-align: left;
  }
`;

export const Box = styled.div`
  border-radius: 12px;
  background-color: #B6B6B6;
  padding: 0.5em;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Alinhar à esquerda */
  text-align: stretch; /* Alinhar o texto à esquerda */
  margin-right: 50px;
  margin-left: 50px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    max-width: 120px; /* Largura máxima da imagem de exemplo */
    height: auto;
    margin-right: 40px;
    border-radius: 5px;
    display: flex;
  }
`;

export const Input = styled.input`
  height: 30%;
  width: 100%;
  margin-top: 5px;
  padding: 18px;
  color: #5c5c5e;
  background: #ffffff;
  border-radius: 10px;
  border-color: transparent;
  display: flex;

  &::placeholder {
    color: #5c5c5e; /* Cor do placeholder branca */
    display: flex;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  color: #5c5c5e;
  background: #ffffff;
  border: 0;
  border-color: transparent;
  border-top: 2px;
  border-radius: 10px; /* Arredondar bordas */
  min-height: 5px; /* Altura mínima do campo de descrição */
  display: flex;

  &::placeholder {
    color: #5c5c5e;
    display: flex;

  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  select {
    height: 100%;
    width: 115%;
    padding: 4%;
    color: #000000;
    background: #ffffff
    align: center;
    border: 0;
    border-color: transparent;
    border-radius: 10px;
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  border: none;
  cursor: pointer;

  &:hover {
    background-color:#5c5c5e;
    display: flex;
  }
`;