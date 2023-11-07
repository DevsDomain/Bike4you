import { MeuEstilo } from "./styles";
import { useState } from 'react'
import { Usuario } from "../../components/Usuario";
import Cadastro from "../../components/Cadastro";
import { useAuth } from "../../hooks/auth";
import { Geral } from "../../components/Geral";


function Gerenciar() {
  const user = useAuth()
  console.log(user)

  const [menu, setMenu] = useState(0)

  const buttonColors = {
    1: "#0d193f", // Cor para o botão "Editar Usuário"
    2: "#0d193f", // Cor para o botão "Cadastrar Bike"
    3: "#0d193f", // Cor para o botão "Geral"
  };


  return (
    <MeuEstilo>
      <h1 id="gerenciarText">Gerenciar conta</h1>
      <div className="container">


        <div className="menu">
          <button
            className="botao"
            style={{ backgroundColor: menu === 1 ? buttonColors[1] : "#0f0f0fca" }}
            onClick={() => setMenu(1)}
          >
            Editar Usuário
          </button>
          <button
            className="botao"
            style={{ backgroundColor: menu === 2 ? buttonColors[2] : "#0f0f0fca" }}
            onClick={() => setMenu(2)}
          >
            Cadastrar Bike
          </button>
          <button
            className="botao"
            style={{ backgroundColor: menu === 3 ? buttonColors[3] : "#0f0f0fca" }}
            onClick={() => setMenu(3)}
          >
            Geral
          </button>
        </div>

        {menu === 2 ? <Cadastro />
          : menu === 1 ? <Usuario />
            : <Geral />
        }
      </div>
    </MeuEstilo >
  );

};


export default Gerenciar;