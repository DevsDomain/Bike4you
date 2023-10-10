
import styled from "styled-components";
import backgroundImg from '../../assets/background.jpg'

export const MeuEstilo = styled.div`

.geral {
  display: flex;
  justify-content: flex-start; /* Alinha o conteúdo no início (esquerda) */
}

.conteudo {
  display: flex;
  align-items: baseline; 
}

.imagem-container {
  margin-top: 20px; /* Margem no topo da imagem */
  margin-left: 70px; /* Margem à esquerda da imagem */
  margin-bottom: 50px;
}

.img {
  width: 70px; /* Defina o tamanho da imagem conforme necessário */
  height: auto; /* Para manter a proporção da imagem */
  border-radius: 10px;
  margin-right: 20px; /* Espaçamento entre a imagem e o texto */
}

h1 {
  font-size: 30px; /* Tamanho do texto */
  font-weight: bold; 
  font-family: Arial, Verdana, sans-serif; 
}

.caixa-de-formulario {
  width: 80%; 
  max-width: 1200px; 
  padding: 20px;
  background-color: #696969;
  border-radius: 10px;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 20px; 
  margin-top: 20px;
  display: flex; 
  flex-direction: column; 
}

:root {
  font-size: 62.5%
  --nav-bg-color: #121212;
  --nav-text-color: white;
  --button-bg-color: #0052CE;
  --button-text-color: white;
}


label.nome-label {
  text-align: left;
  width: 100px;
  margin-right: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  height: 40px;
}

/* Estilos para os campos e rótulos */
.campos-container {
  display: flex;
  align-items: center; 
  margin-bottom: 20px; 
}


/* Estilos para o campo de entrada de texto */
input[type="text"] {
  width: 70%; 
  padding: 10px;
  border: 1px solid #ccc;
  height: 40px; 
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.campos-container.cep-numero {
  justify-content: flex-start;
}

input#cep {
  width: 25%;
  margin-right: 40px; /* Margem à esquerda da imagem */
}

input#numero {
  width: 25%; 
}

label.nome-label2 {
  text-align: left;
  width: 100px;
  margin-right: 110px;
  height: 100px;
}

.container {
  text-align: center; /* Alinhar ao centro se necessário */
}

.caixa {
  display: inline-block;
  width: 300px; /* Defina a largura desejada para cada caixa */
  height: 100px; /* Defina a altura desejada para cada caixa */
  background-color: white;
  margin-left: 10px;
  margin-right: 95px; /* Espaço entre as caixas */
  padding: 10px;
}

input[type="endereco"] {
  width: 100%; /* Preenche toda a largura da caixa */
  height: 100%; /* Preenche toda a altura da caixa */
  border: none; /* Remova a borda do input, se desejado */
  outline: none; /* Remova o contorno ao focar no input, se desejado */
  background-color: transparent; /* Remova a cor de fundo do input */
  padding: 10px;
}











  
`