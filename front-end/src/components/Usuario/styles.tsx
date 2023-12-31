
import styled from "styled-components";
export const MeuEstilo = styled.div`

.caixa-de-formulario {
  padding: 3.5em;
  background-color: #B6B6B6;
  border-radius: 12px;
  display: flex; 
  line-height: 3.0;
  flex-direction: column; 
}

label.nome-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
  color: black
}

label.cep-label {
  text-align: left;
  width: 50px;
  display: flex;
  font-family: helvetica;
  color: black
}

label.email-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
  color: black
}

label.telefone-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
  color: black
}

label.bairro-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
  color:  #393a3f;
}

label.cidade-label {
  text-align: left;
  width: 80px;
  display: flex;
  font-family: helvetica;
  color: #393a3f;
}

label.numero-label {
  text-align: left;
  width: 30px;
  display: flex;
  justify-content: space-evenly;
  font-family: helvetica;
  color: black
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
  background-color: #FFFF;
  border: 1px solid #cac7c7;
  border-radius: 5px;
}

/* Estilos para o campo de entrada de texto */
input[type="text2"] {
  width: 75%; 
  padding: 10px;
  height: 40px; 
  display: flex;
  background-color: #dddeeb;
  border: 1px solid #d0d2e7;
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
  color: red;
}
  
input#cidade {
  width: 75%; 
  margin-right: 20px;
}

 `