import styled from 'styled-components';

const StyledCard = styled.div`
  width: 300px;
  height: 400px;
  margin: 1em;
  border: 1em;
  padding: 5px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #22222270;
  background-color: #4f5052;
  display: flex ;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 1em;

  

  /* Estilos para o texto nos cantos do card */
  .corner-text-top-left{

    top: 10px; left: 5%;
    font-size: 16px;
    font-family: sans-serif;
    color: whitesmoke;
    padding: 6px;
  }

  .corner-text-top-right{
    top: 10px; left: 30%;
    font-size: 16px;
    font-family: sans-serif;
    color: whitesmoke;
    padding: 6px;
  }

  .corner-text-bottom-right{
    top: 48%; left: 35%;
    font-size: 16px;
    font-family: sans-serif;
    color: whitesmoke;
    padding: 6px;
  }

  .corner-text-bottom-left{
    top: 48%; left: 5%;
    font-size: 16px;
    font-family: sans-serif;
    color: whitesmoke;
    padding: 8px;
  }


.image-container{
  width: 100%;
  display: flex;
  justify-content: space-around
}

  /* Estilos para o botão no final do Card */
  .div-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
 
  }

  .bottom-button3 {
    background-color: #f0f0e7;
    color: #1e086bte;
    font-size: 19px;
    font-family: Calibri;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 15px;
    padding: 16px;
    border-radius: 12px;
    top: 55%;

}
.bottom-button4 {
  background-color: #f0f0e7;
    color: #5a6479te;
    font-size: 19px;
    font-family: Calibri;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 15px;
    padding: 16px;
    border-radius: 12px;
    top: 55%;

}
`;

export { StyledCard }