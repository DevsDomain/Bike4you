import { useState } from "react";
import axios from "axios";
import '../App.css';

function User() {
  const [alias, setAlias] = useState("");
  const [mail, setMail] = useState("nome@meuEmail.com");
  const [phone, setPhone] = useState("996791297");

  async function CriarUsuario(
    alias: string,
    mail: string,
    phone: string
  ): Promise<String> {
    await axios({
      method: "post",
      url: "http://localhost:3026/usuario",
      headers: {},
      data: {
        alias,
        mail,
        phone,
      },
    }).then((response) => console.log(response.data));
    return "Done";
  }

  return (
    <div className="d-flex">
      <div className="container">
        <h1>Cadastrar usuários!</h1>
        <h2>Olá {alias} </h2>
        <p>Seu email: {mail}</p>
        <p>Seu telefone: {phone}</p>
        Seu nome:
        <input
          onChange={(e) => setAlias(e.target.value)}
          type="text"
          name="nome"
          id="meuID"
        />
        Seu Email:
        <input
          onChange={(e) => setMail(e.target.value)}
          type="email"
          name="mail"
          id="meuMail"
        />
        Seu Telefone:
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="phone"
          id="meuPhone"
        />
        <button onClick={(e: any) => CriarUsuario(alias, mail, phone)}>
          Enviar para o servidor
        </button>
      </div>
    </div>  
  );
}

export default User;
