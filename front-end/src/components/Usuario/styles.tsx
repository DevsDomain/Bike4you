
import styled from "styled-components";
export const MeuEstilo = styled.div`

.caixa-de-formulario {
  width: 70%; 
  max-width: 1200px; 
  padding: 20px;
  background-color: #696969;
  border-radius: 10px;
  margin-left: 160px;
  display: flex; 
  line-height: 3;
  flex-direction: column; 
  box-shadow: 5 5 10px rgba(1, 1, 1, 1.2);
}

label.nome-label {
  text-align: left;
  width: 101px;
  margin-right: 10px;
  display: flex;
}

label.cep-label {
  text-align: left;
  width: 24px;
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
  width: 96px;
  margin-right: 14px;
  display: flex;
}

label.bairro-label {
  text-align: left;
  width: 101px;
  margin-right: 10px;
  display: flex;
}

label.endereco-label {
  text-align: left;
  width: 101px;
  margin-right: 10px;
  display: flex;
}

label.complemento-label {
  text-align: left;
  width: 113px;
  margin-right: 10px;
  display: flex;
}

.campos-container {
  align-items: center; 
  margin-bottom: 5px; 
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
  width: 33%;   
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

.botoes-formulario {
  display: flex;
  justify-content: space-between; /* Espaço igual entre os botões */
}

`