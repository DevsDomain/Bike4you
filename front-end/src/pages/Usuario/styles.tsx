
import styled from "styled-components";
import backgroundImg from '../../assets/background.jpg'
export const MeuEstilo = styled.div`

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

.geral {
  display: flex;
  justify-content: flex-start; /* Alinha o conteúdo no início (esquerda) */
}

.conteudo {
  display: flex;
  align-items: baseline; 
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
  padding: 30px;
  background-color: #696969;
  border-radius: 10px;
  margin-left: 100px;
  display: flex; 
  flex-direction: column; 
}

.botoes-container {
  display: flex;
  background-color: var(--nav-bg-color);
  color: white;
  justify-content: left;
  margin-left: 90px;
  margin-top: 10px;
}

.botao {
  background-color: black;
  color: white;
  border: none;
  padding: 15px 100px; 
  border-radius: 10px;
  margin-left: 10px;
  font-weight: bold
  display: flex;
  flex-direction: column; /* Altera a direção do flexbox para vertical */
  align-items: center; /* Alinha os itens verticalmente (no centro) */
  font-size: 25px;
}


label.nome-label {
  text-align: left;
  width: 110px;
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

.campos-container.telefone-cep {
  flex: 1
  width: 1000px;
  height: 50px;
}

input#cep {
  width: 25%;
}

input#telefone {
  width: 32%; 
  margin-right: 20px;
}

.campos-container.pais-bairro {
  flex: 1
  width: 1000px;
  height: 50px;
}

.campos-container.complemento {
  flex: 1
  width: 800px;
  height: 50px;
}

input#pais {
  width: 32%; 
  margin-right: 20px;
}

input#bairro {
  width: 25%;
}

.campo-complemento {
  width: 99%; 
}















  
`