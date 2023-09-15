import axios from "axios";
import { useState } from "react";
import '../App.css';

function Brand() {
  const [name, setName] = useState(""); //marca


  async function SalvarMarca(){
    axios.post('http://localhost:3026/marca',{name})
    .then(({data}) => console.log(data));
  }

  return (
    <div>
      <div>
        <p>Marca</p>
        <input value={name} onChange={ e => setName(e.target.value)} placeholder="Digite o nome da Marca" />
        <button type="submit" onClick={SalvarMarca}>Salvar</button>
      </div>
    </div> 
  );
}

export default Brand;