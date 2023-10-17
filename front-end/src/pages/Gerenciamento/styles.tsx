import styled from "styled-components";
export const MeuEstilo = styled.div`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

:root {
  font-size: 62.5%
  --nav-bg-color: #121212;
  --nav-text-color: white;
  --button-bg-color: #0052CE;
  --button-text-color: white;
}

.body {
font-size: 1.6rem;
font-family: 'Roboto', sans-serif;
}

.a {
  color: white;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: dark grey; 
  height: 50px; 
}

.logo1{
  color: white;
  order:1;
}

.logo2{
  color: white;
  order:2;
}

.button{
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.6rem;

  background: white;
  border-radius: .8rem;

  color: white;
}

.button2{
  display: inline-flex;
  justify-content: left;
  align-items: center;

  padding: 1rem 1.6rem;

  background: white;
  border-radius: .8rem;

  color: white;
}

ul{
  display: flex;
  list-style: none;
  gap: 3rem;
}

  .citacao{
    text-align: left;
    fonte-size: 12px;
    font-style: italic;
  }

  .destaque{
    background-color: yellow;
  }



  .container {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  background-color: blueviolet;
  display:flex;

  }

  .p{
    color:blueviolet;
    font-family:serif;
  }
  
  .h1,h2,h3{
    color:white;
    align-items: center;

  }

  .borda1{
    border: solid 2px blue;
    margin-left: 50px;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding bottom: 15px;
  }

  .borda2{
    border: dotted 5px red;
    margin-top: 50px;
    padding: 15px 25px 15px 25px;
  }

  .borda3{
    border: dashed 5px green;
    margin: 50px 75px 50px 100px;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .tab {
    background-color: #f2f2f2;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .conteudo {
    margin-top: 20px;
  }

  `
  
