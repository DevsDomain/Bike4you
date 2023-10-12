
import styled from "styled-components";
export const MeuEstilo = styled.div`

.imagem-container {
  margin-top: 20px; /* Margem no topo da imagem */
  margin-left: 70px; /* Margem à esquerda da imagem */
  margin-bottom: 30px;
  display: flex;
}

.img {
  width: 70px; /* Defina o tamanho da imagem conforme necessário */
  height: auto; /* Para manter a proporção da imagem */
  border-radius: 10px;
  margin-right: 20px; /* Espaçamento entre a imagem e o texto */
  display: flex;
}

.geral {
  display: flex;
  justify-content: flex-start; /* Alinha o conteúdo no início (esquerda) */
  display: flex;
}

.conteudo {
  display: flex;
  align-items: baseline;
  display: flex; 
}

.img {
  width: 70px; /* Defina o tamanho da imagem conforme necessário */
  height: auto; /* Para manter a proporção da imagem */
  border-radius: 10px;
  margin-right: 20px; /* Espaçamento entre a imagem e o texto */
  display: flex;
}

h1 {
  font-size: 30px; /* Tamanho do texto */
  font-weight: bold; 
  font-family: Arial, Verdana, sans-serif; 
  display: flex;
}

.caixa-de-formulario {
  width: 71%; 
  max-width: 1200px; 
  padding: 30px;
  background-color: #696969;
  border-radius: 10px;
  margin-left: 180px;
  display: flex; 
  flex-direction: column; 
  box-shadow: 0 0 10px rgba(1, 1, 1, 1.2);
}

.botoes-container {
  display: flex;
  background-color: var(--nav-bg-color);
  color: white;
  justify-content: left;
  margin-left: 170px;
  margin-top: 10px;
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

.botao-usuario {
  display: flex;
  background-color: #084d6e;
  color: white;
  border: none;
  padding: 10px 100px; 
  border-radius: 10px;
  margin-left: 15px;
  font-weight: bold
  display: flex;
  flex-direction: column; /* Altera a direção do flexbox para vertical */
  align-items: center; /* Alinha os itens verticalmente (no centro) */
  font-size: 25px;
  box-shadow: 0 0 10px black;
  max-width: 1200px; 
}

label.nome-label {
  text-align: left;
  width: 101px;
  margin-right: 10px;
  display: flex;
}

label.cep-label {
  text-align: left;
  width: 25px;
  margin-right: 10px;
  display: flex;
}

label.email-label {
  text-align: left;
  width: 101px;
  margin-right: 10px;
  display: flex;
}

label.telefone-label {
  text-align: left;
  width: 98px;
  margin-right: 10px;
  display: flex;
}

label.bairro-label {
  text-align: left;
  width: 98px;
  margin-right: 10px;
  display: flex;
}

label.endereco-label {
  text-align: left;
  width: 100px;
  margin-right: 10px;
  display: flex;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  height: 40px;
  display: flex;
}

/* Estilos para os campos e rótulos */
.campos-container {
  display: flex;
  align-items: center; 
  margin-bottom: 10px; 
  display: flex;
}


/* Estilos para o campo de entrada de texto */
input[type="text"] {
  width: 70%; 
  padding: 10px;
  border: 1px solid #ccc;
  height: 40px; 
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 1, 1.2);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

input#cep {
  width: 32%;
}

input#telefone {
  width: 32%; 
  margin-right: 20px;
}


input#complemento {
  width: 32.5%;   
  margin-left: 10px;
}

input#bairro {
  width: 20%; 
  margin-right: 20px;
}
  
input#endereco {
  width: 70%; 
  margin-right: 20px;
}

.botao-salvar {
  /* Estilos para o botão à direita do campo "NOME" */
  background-color: white;
  color: #fff;
  padding: 15px;
  margin-left: 60px; /* Define a margem à esquerda para criar espaço vertical */
  /* Outros estilos para o botão */
  width: 10%; 
  height: 60px;
  align-items: center; 
  display: flex;
  margin-right: 1px;
  display: flex;
}

.botao-salvar img {
  /* Estilos para a imagem dentro do botão */
  margin-right: 5px; /* Adiciona um espaço entre o texto e a imagem */
  width: 80%; 
  height: 40px;
  align-items: center; 
  display: flex;
}

.botao-editar {
  /* Estilos para o botão à direita do campo "NOME" */
  background-color: white;
  color: #fff;
  padding: 15px;
  margin-left: 60px; /* Define a margem à esquerda para criar espaço vertical */
  /* Outros estilos para o botão */
  width: 10%; 
  height: 60px;
  align-items: center; 
  display: flex;
  margin-right: 1px;
  display: flex;
}

.botao-editar img {
  /* Estilos para a imagem dentro do botão */
  margin-right: 5px; /* Adiciona um espaço entre o texto e a imagem */
  width: 80%; 
  height: 40px;
  align-items: center; 
  display: flex;
}

.botoes-formulario {
  display: flex;
  justify-content: space-between; /* Espaço igual entre os botões */
}


`