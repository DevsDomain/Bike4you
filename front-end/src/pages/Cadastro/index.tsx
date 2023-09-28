import { useEffect, useState } from "react";
import CadastrarBike from "../../controllers/cadastrarBike";

import { Container, Form, Input } from "./styles";

export default function Cadastro() {
  const [idUsuario, setidUsuario] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [gender, setGender] = useState("");
  const [suspension, setSuspension] = useState("");
  const [rim, setRim] = useState("");
  const [speedkit, setSpeedkit] = useState("");
  const [description, setDescription] = useState("");
  const [hourlyvalue, setHourlyvalue] = useState("");
  const [dailyvalue, setDailyvalue] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    setidUsuario(JSON.parse(localStorage.getItem("idUsuario") || ""));
    if (idUsuario) {
      setidUsuario(idUsuario);
    }
  }, [idUsuario]);

  async function Cadastrando() {
    await CadastrarBike(
      color,
      size,
      material,
      description,
      dailyvalue,
      idUsuario
    ).then((res) => console.log(res));
  }

  return (
    <Container>
      <Form>
    
          <h3>Cadastrar Bike</h3>
          <Input placeholder={"Insira a cor"} value={color} onChange={(e) => setColor(e.target.value)} />
        

          <Input
            placeholder={"Insira o tamanho"}
        
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        
        <div style={{display:"flex"}} >
          <h3 style={{paddingLeft:"5px"}} >Material</h3>
          <select
            placeholder="Material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            <option value="alumínio" defaultChecked>
              Alumínio
            </option>
            <option value="carbono">Carbono</option>
            <option value="ferro">Ferro</option>
          </select>

          <h3>Suspensão</h3>
          <select
            value={suspension}
            onChange={(e) => setSuspension(e.target.value)}
          >
            <option value="true" defaultChecked>
              Sim
            </option>
            <option value="false">Não</option>
          </select>
    
          <h3>Gênero</h3>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="unissex" defaultChecked>
              Unissex
            </option>
          </select>
          </div>
    
          <Input
            placeholder={"Insira a transmissão"}
            value={speedkit}
            onChange={(e) => setSpeedkit(e.target.value)}
          />
        
    

          <Input
          placeholder={"Insira o Aro"} 
          value={rim} onChange={(e) => setRim(e.target.value)} />
        
    

        

          <Input
            placeholder={"Insira a Descrição"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            placeholder={"Insira o valor por hora"}
            value={hourlyvalue}
            onChange={(e) => setHourlyvalue(e.target.value)}
          />
        
    

          <Input
            placeholder={"Insira o valor da diária"}
            value={dailyvalue}
            onChange={(e) => setDailyvalue(e.target.value)}
          />
        
    

          <Input
            placeholder={"Insira a Longitude"}
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        
    
          <Input
            placeholder={"Insira a Latitude"}
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        
        <button onClick={() => Cadastrando()}> Cadastrar </button>
      </Form>
    </Container>
  );
}
