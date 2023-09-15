import axios from "axios";
import { useState } from "react";
import '../App.css';

function Category() {
  const [name, setName] = useState(""); //marca


  async function SalvarCategoria(){
    axios.post('http://localhost:3026/marca',{name})
    .then(({data}) => console.log(data));
  }

  return (
    <div>
      <div>
        <p>Categoria</p>
        <input value={name} onChange={ e => setName(e.target.value)} placeholder="Digite o nome da Categoria" />
        <button type="submit" onClick={SalvarCategoria}>Salvar</button>
      </div>
    </div> 
  );
}

export default Category;