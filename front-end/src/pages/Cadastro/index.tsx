import { useEffect, useState } from "react";
import CadastrarBike from "../../controllers/cadastrarBike";

import { Container, Form, Input } from "./styles";
import { Button } from "../../components/button";
import buscarMarcas, { Brand } from "../../controllers/buscarMarcas";
import BuscarCategoria, { Category } from "../../controllers/buscarCategoria";
import CadastrarMarca from "../../controllers/cadastrarMarca";
import CadastrarCategoria from "../../controllers/cadastrarCategoria";

export default function Cadastro() {
  const [idUsuario, setidUsuario] = useState("");

  const [category, setCategory] = useState<number>(1);
  const [newCategory, setNewCategory] = useState("")
  const [brand, setBrand] = useState<number>(1);
  const [newBrand, setNewBrand] = useState("")
  const [description, setDescription] = useState("");
  const [hourlyvalue, setHourlyvalue] = useState("");
  const [dailyvalue, setDailyvalue] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setidUsuario(JSON.parse(localStorage.getItem("idUsuario") || ""));

    if (idUsuario) {
      setidUsuario(idUsuario);
    }
  }, [idUsuario]);

  async function fetchBrands() {
    try {
      const marcasCarregadas = await buscarMarcas()
      setBrands(marcasCarregadas);

    } catch (error) {
      console.log("Erro ao buscar marcas", error)
    }
  }


  async function fetchCategories() {
    try {
      const categoriasCarregadas = await BuscarCategoria()
      setCategories(categoriasCarregadas);
    } catch (error) {
      console.log("Erro ao buscar categorias", error);
    }

  }

  async function handleNewBike() {
    const idbrand = brand === 0 ? await handleNewBrand(newBrand) : brand
    const idcategory = category === 0 ? await handleNewCategory(newCategory) : category

    const bike = await CadastrarBike(
      idbrand,
      idcategory,
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

  async function handleNewBrand(brand: string): Promise<number> {
    let idBrand = await CadastrarMarca(brand)
    return idBrand
  }

  async function handleNewCategory(category: string): Promise<number> {
    let idCategory = await CadastrarCategoria(category)
    return idCategory
  }

  useEffect(() => {
    fetchBrands()
    fetchCategories();
  }, [])

  return (
    <Container>
      <Form id="form" encType="multipart/form-data">

        <h3>Cadastrar Bike</h3>
        <select value={brand} onChange={(e) => setBrand(Number(e.target.value))}>
          <option value={1}>Selecione uma marca</option>
          {brands.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
          <option value={0} >Criar nova</option>
        </select>
        {brand === 0 && <>


          <Input placeholder={"Insira a Marca"} value={newBrand} onChange={(e) => setNewBrand(e.target.value)} />


        </>}


        <Input
          placeholder={"Insira o valor por hora"}
          value={hourlyvalue}
          onChange={(e) => setHourlyvalue(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(Number(e.target.value))}>
          <option value={1}>Selecione uma Categoria</option>
          {categories.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
          <option value={0}>Criar nova</option>
        </select>
        {category === 0 && <>


          <Input placeholder={"Insira a Categoria, exemplo: MTB"}
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />

        </>}

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



        <Button loading={false} title={"Cadastrar"} key={0} onClick={handleNewBike} ></Button>
      </Form>
    </Container>
  );
}

