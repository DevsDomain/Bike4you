import { MeuEstilo } from "./styles";
import {useState} from 'react'
import { Usuario } from "../../components/Usuario";
import Cadastro from "../Cadastro";
function Gerenciar() {

  const[menu,setMenu] = useState(0)


  return (
    <MeuEstilo>
      <div className="geral">
        <div className="imagem-container">
          <div className="conteudo">
            <h1>Bem-vindo(a)!</h1>
          </div>
        </div>
      </div>

      <div className="botoes-container-usuario">
        <div className="botoes-formulario">
          <button className="botao" id="botao1" onClick={() => setMenu(1)}>Usuário</button>
          <button className="botao" id="botao2" onClick={() => setMenu(2)}>Cadastrar Bike</button>
          <button className="botao" id="botao3" onClick={() => setMenu(3)}>Geral</button>
        </div>
      </div>

      {menu === 2 ? <Cadastro/>
      : <Usuario/> }
      
    </MeuEstilo >
  );

};


export default Gerenciar;