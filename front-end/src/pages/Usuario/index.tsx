import { MeuEstilo } from "./styles";
import {useState} from 'react'
import { Usuario } from "../../components/Usuario";
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
          <button className="botao-usuario" id="botao1" onClick={() => setMenu(1)}>Usuário</button>
          <button className="botao" id="botao2" onClick={() => setMenu(2)}>Cadastrar Bike</button>
        </div>
      </div>

      {menu === 2 ? <input></input>
      : <Usuario/> }
      
    </MeuEstilo >
  );

};






export default Gerenciar;