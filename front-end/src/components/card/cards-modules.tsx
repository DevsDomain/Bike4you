import styled from 'styled-components';

const StyledCard = styled.div`
  width: 350px;
  height: 400px;
  padding: 5px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #111010;
  background-color: #4f5052;
  margin-right: 15px;
  margin-top: 21px;
  margin-bottom: 26px;

  /* Estilos para o texto nos cantos do card */
  .corner-text-top-left{

    top: 10px; left: 15%;
    font-size: 16px;
    font-family: sans-serif;
    color: whitesmoke;
    padding: 6px;
    margin-left: 10px;
  }

  .corner-text-top-right{
    top: 10px; left: 30%;
    font-size: 16px;
    font-family: sans-serif;
    color: whitesmoke;
    padding: 6px;
    margin-left: 10px;
  }

  .corner-text-bottom-right{
    top: 48%; left: 35%;
    font-size: 16px;
    font-family: sans-serif;
    color: whitesmoke;
    padding: 5px;
    margin-left: 10px;
  }

  .corner-text-bottom-left{
    top: 48%; left: 5%;
    font-size: 16px;
    font-family: sans-serif;
    color: whitesmoke;
    padding: 6px;
    margin-left: 10px;
  }


.image-container{
  width: 100%;
  display: flex;
  justify-content: center;
}

  /* Estilos para o botão no final do Card */
  .div-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
 
  }
  .bottom-button {
    margin-left: 15px;
    background-color: #cad0db;
    border-radius: 12px;
}
.bottom-button2 {
  background-color: #cad0db;
    color: #1976d2;
    font-size: 19px;
    font-weight: bold;
    font-family: Calibri;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 42px;
    padding: 16px;
    border-radius: 12px;
    top: 55%;
}
`;

export { StyledCard }