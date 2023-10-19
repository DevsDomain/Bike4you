
import styled from "styled-components";
export const MeuEstilo = styled.div`

.caixa-de-formulario {
  padding: 1em;
  background-color: #B6B6B6;
  border-radius: 12px;
  display: flex; 
  line-height: 3;
  flex-direction: column; 
  color: black
}

label.nome-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
}

label.cep-label {
  text-align: left;
  width: 50px;
  display: flex;
  font-family: helvetica;
}

label.email-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
}

label.telefone-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
}

label.bairro-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
}

label.cidade-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
}

label.numero-label {
  text-align: left;
  width: 30px;
  display: flex;
  justify-content: space-evenly;
  font-family: helvetica;
}

.campos-container {
  align-items: center; 
  display: flex;
  margin-bottom: 5px;

}

/* Estilos para o campo de entrada de texto */
input[type="text"] {
  width: 75%; 
  padding: 10px;
  height: 40px; 
  display: flex;
  background-color: #fffffffd;
  border: 1px solid #cac7c7;
  border-radius: 5px;
}

input#cep {
  width: 22%;
}

input#telefone {
  width: 40%; 
  margin-right: 20px;
}

input#numero {
  width: 20%;   
  margin-left: 20px;
}

input#bairro {
  width: 42%; 
  margin-right: 20px;
}
  
input#cidade {
  width: 75%; 
  margin-right: 20px;
}

 `