import { useEffect, useState } from "react";
import { MeuEstilo } from "./styles";


function Gerenciamento() {
  const [idUsuario, setidUsuario] = useState("");


  useEffect(() => {
    setidUsuario(JSON.parse(localStorage.getItem("idUsuario") || ""));

    if (idUsuario) {
      setidUsuario(idUsuario);
    }
  }, [idUsuario]);


  return (
    <MeuEstilo>
      <nav>
      <ul>
          <li>Home</li>
          <li>Bikes</li>
        </ul>

        <a href="#" className="logo2">Maria</a>

        </nav>

</MeuEstilo>
  );
}


export default Gerenciamento;