import React, { useState, createContext } from "react";
import { MeuEstilo } from "./styles";
import Usuario from '../../assets/usuario.jpg';
import Salvar from '../../assets/salvar.png';
import Editar from '../../assets/editar.png';
import { Link } from 'react-router-dom';

interface props {
  add: (origem: string) => void;
  origens: string[];
  remove: (e: any, indice: number) => void;
}

const handleSave = () => {
  // Aqui você pode adicionar a lógica para salvar os dados do formulário.
  // Exemplo: salvar o valor do campo "nome" em algum lugar.
  const nome = document.getElementById("nome") as HTMLInputElement;
  if (nome) {
    const nomeValue = nome.value;
    console.log("Nome a ser salvo:", nomeValue);
    // Adicione a lógica para salvar os dados.
  }
};

const Gerenciar: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [endereco, setEndereco] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const Contexto = createContext({} as props);


  return (
    <MeuEstilo>
      <div className="geral">
        <div className="imagem-container">
          <div className="conteudo">
            <img src={Usuario} alt="usuario" className="img" />
            <h1>Bem-vindo(a)!</h1>
          </div>
        </div>
      </div>

      <div className="botoes-container">
        <button className="botao" id="botao1">Usuário</button>
        <Link to="../Cadastro">
          <button className="botao" id="botao2">Cadastrar Bike</button>
        </Link>
        <button className="botao" id="botao3">Geral</button>
      </div>
      <div className="caixa-de-formulario">
        <form>
          <div className="campos-container">
            <label className="nome-label" htmlFor="nome">
              NOME:
            </label>
            <input type="text" id="nome" name="nome" />
            <button className="botao-editar img" onClick={handleSave}>
              <img src={Editar} alt="Editar" className="img" title="Editar" />
            </button>

          </div>
          <div className="campos-container">
            <label className="email-label" htmlFor="email">EMAIL:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="campos-container">
            <label className="telefone-label" htmlFor="telefone">TELEFONE:</label>
            <input type="text" id="telefone" name="telefone" />
            <label className="cep-label" htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" />
            <button className="botao-salvar img" onClick={handleSave}>
              <img src={Salvar} alt="Salvar" className="img" title="Salvar" />
            </button>


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

export default Gerenciar;