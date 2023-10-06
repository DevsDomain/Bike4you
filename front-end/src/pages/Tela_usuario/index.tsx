import React, { useState } from "react";
import { MeuEstilo } from "./styles";

const Tela_usuario: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [endereco, setEndereco] = useState("");
  const [observacoes, setObservacoes] = useState("");

  return (
    <MeuEstilo>
      <div className="cabecalho">
        <img src="sua-imagem.jpg" alt="Foto de Maria" />
        <div className="informacoes">
          <h1>Bem vinda, Maria</h1>
          <div className="navegacao">
            <button className="botao-navegacao">Usuário</button>
            <button className="botao-navegacao">Bike</button>
            <button className="botao-navegacao">Geral</button>
          </div>
        </div>
      </div>

      <div className="campos">
        <div className="formulario">
          <label>NOME:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label>EMAIL:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>TEL:</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <label>CEP:</label>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <label>Nº:</label>
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />

          <div className="endereco">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <div className="observacoes">
            <label htmlFor="observacoes">Observações:</label>
            <input
              type="text"
              id="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
            />
          </div>

        </div>

        <div className="botoes">
          <button>Editar</button>
          <button>Salvar</button>
        </div>
      </div>
    </MeuEstilo>
  );
};

export default Tela_usuario;