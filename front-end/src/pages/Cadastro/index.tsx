import { useEffect, useState } from "react";
import CadastrarBike from "../../controllers/cadastrarBike";

import { Container, Form, Input } from "./styles";
import { Button } from "../../components/button";

export default function Cadastro() {
  const [idUsuario, setidUsuario] = useState("");

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const [description, setDescription] = useState("");
  const [hourlyvalue, setHourlyvalue] = useState("");
  const [dailyvalue, setDailyvalue] = useState("");


  useEffect(() => {
    setidUsuario(JSON.parse(localStorage.getItem("idUsuario") || ""));
    if (idUsuario) {
      setidUsuario(idUsuario);
    }
  }, [idUsuario]);

  async function Cadastrando() {
    await CadastrarBike(
      brand,
      category,
      description,
      dailyvalue,
      hourlyvalue,
      idUsuario
    ).then((res) => console.log(res));
  }

  return (
    <Container>
      <Form>
    
          <h3>Cadastrar Bike</h3>
          <Input placeholder={"Insira a Marca"} value={brand} onChange={(e) => setBrand(e.target.value)} />
        

          <Input
            placeholder={"Insira a Categoria, exemplo: MTB"}
        
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
             

          <Input
            placeholder={"Insira a Descrição, como a cor, tamanho, aro etc."}
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
        
    

          
        
        <Button google={false} onClick={Cadastrando} title={"Cadastrar"} loading={false}></Button>
      </Form>
    </Container>
  );
}
