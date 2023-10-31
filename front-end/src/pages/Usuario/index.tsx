import { MeuEstilo } from "./styles";
import { useState } from 'react'
import { Usuario } from "../../components/Usuario";
import Cadastro from "../../components/Cadastro";
import { useAuth } from "../../hooks/auth";
import Detalhes from "../../components/Detalhes/Detalhes";

function Gerenciar() {
  const user = useAuth()
  console.log(user)

  const [menu, setMenu] = useState(0)


  return (
    <MeuEstilo>
      <h1 id="gerenciarText">Gerenciar conta</h1>
      <div className="container">


        <div className="menu">
          <button className="botao" id="botao1" onClick={() => setMenu(1)}>Editar Usuário</button>
          <button className="botao" id="botao2" onClick={() => setMenu(2)}>Cadastrar Bike</button>
          <button className="botao" id="botao3" onClick={() => setMenu(3)}>Detalhes Bike</button>
        </div>

        {menu === 2 ? <Cadastro />
          :  (menu === 1 ? <Usuario /> : <Detalhes /> ) 
          }
      </div>
    </MeuEstilo >
  );

};


export default Gerenciar;