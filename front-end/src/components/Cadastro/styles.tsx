import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2F2F2F;
  overflow: visible;
  h3{
    text-align: left;
  }
`;

export const Box = styled.div`
  border-radius: 12px;
  background-color: #B6B6B6;
  padding: 1em;
  display: flex;
 
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
    max-width: 130px; /* Largura máxima da imagem de exemplo */
    height: auto;
    margin-right: 40px;
    border-radius: 10px;
    display: flex;
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  margin-top: 9px;
  padding: 22px;

  color: #000000;
  background: #ffffff;
  border-radius: 10px;
  align-items: left;
  border-color: transparent;
  display: flex;

  &::placeholder {
    color: #000000; /* Cor do placeholder branca */
    display: flex;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 5px;
  padding: 12px;
  color: #000000;
  background: #ffffff;
  border: 0;
  border-color: transparent;
  border-radius: 10px; /* Arredondar bordas */
  min-height: 5px; /* Altura mínima do campo de descrição */
  display: flex;

  &::placeholder {
    color: #000000;
    display: flex;

  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  select {
    height: 35px;
    width: 100%;
    padding: 8px;
    color: #000000;
    background: #ffffff;
    border: 0;
    border-color: transparent;
    border-radius: 5px;
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  margin-top: 11px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    display: flex;
  }
`;