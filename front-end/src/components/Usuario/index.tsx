import { useState } from "react";
import { MeuEstilo } from "./styles";
import editarUsuario from "../../controllers/editarUsuario";
import { ButtonUser } from '../../components/buttonUser';


export function Usuario() {
  const [usuario, setUsuario] = useState("");
  const [userName, setNome] = useState("");
  const [mail, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [adress, setAdress] = useState("");
  const [complemento, setComplemento] = useState("");


  const editaUser = async function () {
    const editado = await editarUsuario({ id: 1, userName, mail, phone, cep, adress, bairro, complemento })
    if(editado){
      alert("Usuário editado com sucesso!")
    }
    else{
      alert("Erro ao cadastrar usuário")
    }
  }




  return (
    <MeuEstilo>
      <div className="caixa-de-formulario">
        <form>
          <div className="campos-container">
            <label className="nome-label" htmlFor="nome">
              Nome:
            </label>
            <input type="text" id="nome" name="nome" onChange={e => setNome(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="email-label" htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="telefone-label" htmlFor="telefone">Telefone:</label>
            <input type="text" id="telefone" name="telefone" onChange={e => setPhone(e.target.value)} />
            <label className="cep-label" htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" onChange={e => setCep(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="endereco-label" htmlFor="endereco">Cidade:</label>
            <input type="text" id="endereco" name="endereco" onChange={e => setAdress(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="bairro-label" htmlFor="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro" onChange={e => setBairro(e.target.value)} />
            <label className="complemento-label" htmlFor="complemento">Número:</label>
            <input type="text" id="complemento" name="complemento" onChange={e => setComplemento(e.target.value)} />
          </div>
          <div>
            <ButtonUser loading={false}
              title={"Salvar"}
              key={0}
              onClick={editaUser}
              className="button"
            ></ButtonUser>
          </div>
        </form>
      </div>
    </MeuEstilo >
  );
}

export default Usuario;