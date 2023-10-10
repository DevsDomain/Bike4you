import React, { useState, createContext } from "react";
import { MeuEstilo } from "./styles";
import Usuario from '../../assets/usuario.jpg';

interface props {
  add: (origem: string) => void;
  origens: string[];
  remove: (e: any, indice: number) => void;
}

const Gerenciamento: React.FC = () => {
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
          <div className="campos-container">
            <label className="nome-label" htmlFor="tel">TEL:</label>
            <input type="text" id="tel" name="tel" />
          </div>
          <div className="campos-container cep-numero">
            <label className="nome-label" htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" />
            <label className="nome-label" htmlFor="numero">NÚMERO:</label>
            <input type="text" id="numero" name="numero" />
          </div>

          <div className="container">
            <div className="caixa">
              <input type="endereco" placeholder="ENDEREÇO" />
            </div>
            <div className="caixa">
              <input type="endereco" placeholder="OBSERVAÇÕES" />
            </div>
          </div>

        </form>
      </div>

    </MeuEstilo>
  );
}

export default Gerenciamento;