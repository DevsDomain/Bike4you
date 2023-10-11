import React, { useState, createContext } from "react";
import { MeuEstilo } from "./styles";
import Usuario from '../../assets/usuario.jpg';
import { Link } from 'react-router-dom';
import Cadastro from '../Cadastro';
import styled from "styled-components";

interface props {
  add: (origem: string) => void;
  origens: string[];
  remove: (e: any, indice: number) => void;
}

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
          <button className="botao" id="botao2">Cadastro</button>
        </Link>
        <button className="botao" id="botao3">Geral</button>
      </div>
      <div className="caixa-de-formulario">
        <form>
          <div className="campos-container">

            <label className="nome-label" htmlFor="nome">NOME:</label>
            <input type="text" id="nome" name="nome" />
          </div>
          <div className="campos-container">
            <label className="nome-label" htmlFor="email">EMAIL:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="campos-container telefone-cep">

            <label className="nome-label" htmlFor="telefone">TELEFONE:</label>
            <input type="text" id="telefone" name="telefone" />
            <label className="nome-label" htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" />

          </div>
          <div className="campos-container pais-bairro">
            <label className="nome-label" htmlFor="pais">PAÍS:</label>
            <input type="text" id="pais" name="pais" />
            <label className="nome-label" htmlFor="bairro">BAIRRO:</label>
            <input type="text" id="bairro" name="bairro" />
          </div>
          <div className="campo-complemento">
            <label className="nome-label" htmlFor="complemento">COMPLEMENTO:</label>
            <input type="text" id="complemento" name="complemento" className="campo-complemento" />
          </div>

        </form>
      </div>


    </MeuEstilo >
  );
}

export default Gerenciar;