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
  })
  const [userName, setNome] = useState("");
  const [mail, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("12228080");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");

  const id = localStorage.getItem('idUsuario')



  const editaUser = async function () {
    const editado = await editarUsuario({ id: id, userName, mail, phone, cep, cidade, bairro, complemento })
    if (editado !== 401) {
      alert("Usuário editado com sucesso!")

    }
    else {
      alert("Erro ao cadastrar usuário")
    }
  }


  useEffect(() => {
    async function buscarUser() {
      const user = (await fetch(`${userEndpoint}?id=${id}`)).json()
      return user

    }

    buscarUser().then(({ id, mail, userName, phone }) => {
      setFormUser({ userName, mail, phone })
      setNome(userName)
      setEmail(mail)
      setPhone(phone)
    })


  }, [id])


  useEffect(() => {
    async function buscarCep() {
      const cepData = (await fetch(`https://viacep.com.br/ws/${cep}/json`)).json()
      return cepData

    }
    console.log(cep.length)
    if (cep.length === 8 && RegExp('^[0-9]*$').test(cep)) {
      try {

        buscarCep().then((res) => {
          setBairro(res.bairro);
          setCidade(res.localidade);


        })
      } catch (error) {
        alert("Cep não encontrado!")
      }
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
            <label className="email-label" htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" placeholder={formUser.mail} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="telefone-label" htmlFor="telefone" placeholder={formUser.phone}>Telefone:</label>
            <input type="text" id="telefone" name="telefone" placeholder={formUser.phone} onChange={e => setPhone(e.target.value)} />
            <label className="cep-label" htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" placeholder={cep} onChange={e => setCep(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="endereco-label" htmlFor="endereco">Cidade:</label>
            <input type="text" id="endereco" name="endereco" placeholder={cidade} disabled onChange={e => setCidade(e.target.value)} />
          </div>
          <div className="campos-container">
            <label className="bairro-label" htmlFor="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro" placeholder={bairro} disabled onChange={e => setBairro(e.target.value)} />
            <label className="complemento-label" htmlFor="complemento">Número:</label>
            <input type="text" id="complemento" name="complemento" required onChange={e => setComplemento(e.target.value)} />
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