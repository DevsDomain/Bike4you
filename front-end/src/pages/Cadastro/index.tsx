import { useEffect, useState } from "react";
import { FaSave } from 'react-icons/fa';
import CadastrarBike from "../../controllers/cadastrarBike";
import exemploimg from "../../assets/image2.png"

import { Box, Container, Form, ImageContainer, Input, SelectContainer, TextArea} from "./styles";

//import { Button } from "../../components/button";
import buscarMarcas, { Brand } from "../../controllers/buscarMarcas";
import BuscarCategoria, { Category } from "../../controllers/buscarCategoria";
import CadastrarMarca from "../../controllers/cadastrarMarca";
import CadastrarCategoria from "../../controllers/cadastrarCategoria";
import EditarBike from "../../controllers/editarBike";


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

    // TESTEEEEEEE APAGAR DEPOIS
    // PASSAR o idBike a ser editada! 
    let id = '63'
    const bike = await EditarBike(
      id,
      idbrand,
      idcategory,
      description,
      image,
      dailyvalue,
      hourlyvalue
      

 
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
      <Box>
        <h3>Cadastrar Bike</h3>
        <Form id="form" encType="multipart/form-data">
          <ImageContainer>
            <img src={exemploimg} alt="Exemplo" />
            <Input
              type="file"
              accept="image/*"
              name="uploadedImage"
              id="image"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </ImageContainer>


          <TextArea
            placeholder="Insira a Descrição, como a cor, tamanho, aro etc."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <SelectContainer>
            <select
              value={brand}
              onChange={(e) => setBrand(Number(e.target.value))}
            >
              <option value={1}>Selecione uma marca</option>
              {brands.map(({ name, id }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
              <option value={0}>Criar nova</option>
            </select>
          </SelectContainer>

          {brand === 0 && (
            <Input
              placeholder="Insira a Marca"
              value={newBrand}
              onChange={(e) => setNewBrand(e.target.value)}
            />
          )}

          <SelectContainer>
            <select
              value={category}
              onChange={(e) => setCategory(Number(e.target.value))}
            >
              <option value={1}>Selecione uma Categoria</option>
              {categories.map(({ name, id }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
              <option value={0}>Criar nova</option>
            </select>
          </SelectContainer>

          {category === 0 && (
            <Input
              placeholder="Insira a Categoria, exemplo: MTB"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          )}

          <Input
            placeholder="Insira o valor por hora"
            value={hourlyvalue}
            onChange={(e) => setHourlyvalue(e.target.value)}
          />

          <Input
            placeholder="Insira o valor da diária"
            value={dailyvalue}
            onChange={(e) => setDailyvalue(e.target.value)}
          />

          <FaSave
            size={30} // Tamanho do ícone (pode ser ajustado)
            color="#555657" // Cor do ícone (pode ser ajustada)
            onClick={handleNewBike} // Ação ao clicar no ícone
            style={{ cursor: "pointer" }} // Estilo do cursor
          />

        </Form>
      </Box>
    </Container>

  );
}

