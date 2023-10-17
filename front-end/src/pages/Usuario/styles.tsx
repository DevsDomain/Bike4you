
import styled from "styled-components";
export const MeuEstilo = styled.div`

.imagem-container {
  margin-top: 20px; /* Margem no topo da imagem */
  margin-left: 70px; /* Margem à esquerda da imagem */
  margin-bottom: 30px;
  display: flex;
}

h1 {
  font-size: 30px; /* Tamanho do texto */
  font-weight: bold; 
  font-family: Arial, Verdana, sans-serif; 
  display: flex;
}

.botoes-container-usuario {
  display: flex;
  background-color: dark blue;
  color: white;
  justify-content: left;
  margin-left: 170px;
  margin-top: 10px;
}

.botao {
  display: flex;
  background-color: black;
  color: white;
  border: none;
  padding: 10px 100px; 
  border-radius: 10px;
  margin-left: 0px;
  font-weight: bold
  display: flex;
  flex-direction: column; /* Altera a direção do flexbox para vertical */
  align-items: center; /* Alinha os itens verticalmente (no centro) */
  font-size: 25px;
  box-shadow: 0 0 10px #084d6e;
  max-width: 1200px; 
}

.botoes-formulario {
  display: flex;
  justify-content: space-between; /* Espaço igual entre os botões */
}

`