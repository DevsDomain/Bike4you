
import styled from "styled-components";


export const MeuEstilo = styled.div`

#gerenciarText{
  text-align: center;
  width: 100vw;
  margin: 0.4em auto;
  font-size: 35px;
  font-weight: bold; 
  font-family: Arial, Verdana, sans-serif; 
}
.container {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.menu{
  width: 60%;
  display: flex;
  justify-content: center;
}

.botao {
  background-color: #0f0f0fca;
  color: white;
  padding: 0.70em 2.5em; 
  border-radius: 10px;
  font-weight: bold;
  font-size: 21px;
  box-shadow: 0 0 10px #4e4e52;
  transition: background-color 0.2s;
  &:active {
    background-color: #007bff; /* Defina a cor desejada para quando o botão está ativo */
  }
}


`