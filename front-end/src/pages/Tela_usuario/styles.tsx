import styled from "styled-components";

export const MeuEstilo = styled.div`
  background-color: #ccc;
  padding: 20px;

  .cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    img {
      max-width: 100px;
      border-radius: 50%;
    }
  }

  .informacoes {
    text-align: left; 
      margin-left: 20px; 
      display: flex;
      flex-direction: column;
  }

  .navegacao {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    align-items: flex-start; 
  }

  .campos {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }


  .formulario {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .endereco {
      width: 48%;
    }

    .botao-navegacao {
      padding: 5px 10px;
      background-color: #333;
      color: white; 
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }

    label {
      color: black;
      margin-top: 10px;
      display: inline-block;
      width: 100px;
      margin-top: 5px;
    }

    input,
    textarea {
      width: calc(100% - 100px);
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  }

  .botoes {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;