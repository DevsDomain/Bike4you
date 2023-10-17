import { MeuEstilo } from "./styles";
import { useState } from 'react'
import { Usuario } from "../../components/Usuario";
import Cadastro from "../Cadastro";
function Gerenciar() {

  const [menu, setMenu] = useState(0)


  return (
    <MeuEstilo>
      <div className="geral">
        <div className="imagem-container">
          <div className="conteudo">
            <h1>Bem-vindo(a)!</h1>
          </div>
        </div>
      </div>

      <button className="botao" id="botao1" onClick={() => setMenu(1)} style={{ marginLeft: '160px' }}>Editar Usuário</button>
      <button className="botao" id="botao2" onClick={() => setMenu(2)}>Cadastrar Bike</button>
      <button className="botao" id="botao3" onClick={() => setMenu(3)}>Geral</button>

      {menu === 2 ? <Cadastro />
        : <Usuario />}

    </MeuEstilo >
  );

};


export default Gerenciar;