import { useEffect, useState } from "react";
import { MeuEstilo } from "./styles";
import editarUsuario from "../../controllers/editarUsuario";
import { ButtonUser } from '../../components/buttonUser';
import { userEndpoint } from "../../service/user";

export function Usuario() {
  const [formUser, setFormUser] = useState({
    userName: "",
    mail: "",
    phone: "",
    cep: "",
    numero_residencial: ""
  })
  const [userName, setNome] = useState("");
  const [mail, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero_residencial, setNumero] = useState("");

  const id = localStorage.getItem('idUsuario')

  const editaUser = async function () {
    await editarUsuario({ id: id, userName, mail, phone, cep, numero_residencial })
  }

  useEffect(() => {
    async function buscarUser() {
      const user = (await fetch(`${userEndpoint}?id=${id}`)).json()
      return user

    }

    buscarUser().then(({ mail, userName, phone, cep, numero_residencial }) => {
      setFormUser({ userName, mail, phone, cep, numero_residencial })
      setNome(userName)
      setEmail(mail)
      setPhone(phone)
      setCep(cep)
      setNumero(numero_residencial)
      console.log(mail, userName, phone, cep, numero_residencial)

    })


  }, [id])


  useEffect(() => {
    async function buscarCep() {
      const cepData = (await fetch(`https://viacep.com.br/ws/${cep}/json`)).json()
      return cepData

    }
    try {
      if (cep.length === 8 && RegExp('^[0-9]*$').test(cep)) {

        buscarCep().then((res) => {
          setBairro(res.bairro);
          setCidade(res.localidade);

        })
      }
    } catch (error) {
      alert("Cep não encontrado!")
    }
  }, [cep])


  return (
    <MeuEstilo>
      <div className="caixa-de-formulario">
        <form>
          <div className="campos-container">
            <label className="nome-label" htmlFor="nome">
              Nome:
            </label>
            <input type="text" id="nome" name="nome" placeholder={formUser.userName} onChange={e => setNome(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="email-label" htmlFor="email">E-mail:</label>
            <input type="text" id="email" name="email" placeholder={formUser.mail} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="telefone-label" htmlFor="telefone" placeholder={formUser.phone}>Telefone:</label>
            <input type="text" id="telefone" name="telefone" placeholder={formUser.phone} onChange={e => setPhone(e.target.value)} />
            <label className="cep-label" htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" placeholder={cep} onChange={e => setCep(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="cidade-label" htmlFor="cidade">Cidade:</label>
            <input type="text2" id="cidade" name="cidade" placeholder={cidade} disabled onChange={e => setCidade(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="bairro-label" htmlFor="bairro">Bairro:</label>
            <input type="text2" id="bairro" name="bairro" placeholder={bairro} disabled onChange={e => setBairro(e.target.value)} />
            <label className="numero-label" htmlFor="numero">Número:</label>
            <input type="text" id="numero" name="numero" placeholder={numero_residencial} required onChange={e => setNumero(e.target.value)} />
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