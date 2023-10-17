import React, { useState } from "react";
import { MeuEstilo } from "./styles";
import editarUsuario from "../../controllers/editarUsuario";
import { Button } from "../button";


export function Usuario() {
  const [usuario, setUsuario] = useState("");
  const [userName, setNome] = useState("");
  const [mail, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [observacoes, setObservacoes] = useState("");




   const editaUser =  async function() {
    console.log("funcionou");
    const editado = await editarUsuario({id: 1, userName, mail, telefone, cep, endereco, observacoes})
    console.log(editado);
   }

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
        <button className="botao-usuario" id="botao1">Usuário</button>

        <button className="botao" id="botao3">Geral</button>
      </div>
      </div>
      <div className="caixa-de-formulario">
        <form>
          <div className="campos-container">
            <label className="nome-label" htmlFor="nome">
              NOME:
            </label>
            <input type="text" id="nome" name="nome" onChange={e => setNome(e.target.value)}/>

          </div>
          <div className="campos-container">
            <label className="email-label" htmlFor="email">EMAIL:</label>
            <input type="text" id="email" name="email" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="telefone-label" htmlFor="telefone">TELEFONE:</label>
            <input type="text" id="telefone" name="telefone" onChange={e => setTelefone(e.target.value)} />
            <label className="cep-label" htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" onChange={e => setCep(e.target.value)} />
           <Button loading={false} title={"Editar"} key={0} onClick={editaUser}></Button>


          </div>
          <div className="campos-container">
            <label className="endereco-label" htmlFor="endereco">ENDEREÇO:</label>
            <input type="text" id="endereco" name="endereco" className="campos-container" />
          </div>
          <div className="campos-container">
            <label className="bairro-label" htmlFor="bairro">BAIRRO:</label>
            <input type="text" id="bairro" name="bairro" />
            <label className="complemento-label" htmlFor="complemento">COMPLEMENTO:</label>
            <input type="text" id="complemento" name="complemento" />
          </div>


        </form>
      </div>


    </MeuEstilo >
  );
}

