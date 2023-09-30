import { useEffect, useState } from "react";
import CadastrarBike from "../../controllers/cadastrarBike";

import { Container, Form, Input } from "./styles";
import { Button } from "../../components/button";
import buscarMarcas, { Brand } from "../../controllers/buscarMarcas";

export default function Cadastro() {
  const [idUsuario, setidUsuario] = useState("");

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState<string | number>("");
  const [newBrand, setNewBrand] = useState("")
  const [description, setDescription] = useState("");
  const [hourlyvalue, setHourlyvalue] = useState("");
  const [dailyvalue, setDailyvalue] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    setidUsuario(JSON.parse(localStorage.getItem("idUsuario") || ""));

    if (idUsuario) {
      setidUsuario(idUsuario);
    }
  }, [idUsuario]);


  useEffect(() => {
    async function fetchBrands() {
      try {
        const marcasCarregadas = await buscarMarcas()
        setBrands(marcasCarregadas);

      } catch (error) {
        console.log("Erro ao buscar marcas", error)
      }
    }
    fetchBrands()
  }, [])

  async function Cadastrando() {
    if (brand === "Criar nova") {
      setBrand(newBrand)
    }

    console.log(typeof (brand), brand)
    const bike = await CadastrarBike(
      brand,
      category,
      description,
      image,
      dailyvalue,
      hourlyvalue,
      idUsuario
    )
    if (bike === 201) {
      alert("Bicicleta cadastrada com sucesso!")
    }
    else {
      alert("Problemas ao cadastrar bike")
    }
  }

  return (
    <Container>
      <Form id="form" encType="multipart/form-data">

        <h3>Cadastrar Bike</h3>
        <select value={brand} onChange={(e) => setBrand(Number(e.target.value))}>
          <option value="">Selecione uma marca</option>
          {brands.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
          <option value={'Criar nova'} >Criar nova</option>
        </select>
        {brand === 'Criar nova' && <>


          <Input placeholder={"Insira a Marca"} value={newBrand} onChange={(e) => setNewBrand(e.target.value)} />


        </>}


        <Input
          placeholder={"Insira a Categoria, exemplo: MTB"}

          value={category}
          onChange={(e) => setCategory(e.target.value)}
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

        <Input type="file" accept="image/*" name="uploadedImage" id="image" onChange={(e) => setImage(e.target.files?.[0] || null)}></Input>

        <textarea
          placeholder={"Insira a Descrição, como a cor, tamanho, aro etc."}
          value={description}
          onChange={(e) => setDescription(e.target.value)}

          style={{ marginTop: '15px', backgroundColor: '#121257', border: 'none', width: '80%', minHeight: '75px', color: 'white' }}


        />



        <Button loading={false} title={"Cadastrar"} key={0} onClick={Cadastrando} ></Button>
      </Form>
    </Container>
  );
}
