import axios from "axios";
import { useState } from "react";
import '../App.css';

function Bike() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  function salvar(){
    axios.post('http://localhost:3001/marca',{name})
    .then(({data}) => console.log(data));
    axios.post('http://localhost:3001/bike',{name})
    .then(({data}) => console.log(data));

  }

  return (
    <div className="container">
      <h1>Cadastro de Bicicletas</h1>
      <p>Marca</p>
      <input value={name} onChange={ e => setName(e.target.value)} placeholder="Digite o nome da Marca" />
      <p>Categoria</p>
      <input value={category} onChange={ e => setCategory(e.target.value)} placeholder="Informe a categoria" />
      <p>Cor</p>
      <input value={color} onChange={ e => setColor(e.target.value)} placeholder="Informe a cor" />
      <br />
      <button type="submit" onClick={salvar}>Salvar</button>
    </div> 
  );
}

export default Bike;