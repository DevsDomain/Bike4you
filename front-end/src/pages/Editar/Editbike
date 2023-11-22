import  { useEffect, useState } from "react";
import exemploimg from "../../assets/image2.png"
import { useParams } from "react-router-dom";

import buscarMarcas, { Brand } from "../../controllers/buscarMarcas";
import BuscarCategoria, { Category } from "../../controllers/buscarCategoria";
import CadastrarMarca from "../../controllers/cadastrarMarca";
import CadastrarCategoria from "../../controllers/cadastrarCategoria";
import { Box, Container, Form, ImageContainer, Input, SelectContainer, TextArea } from './styles';
import { FaSave } from "react-icons/fa";
import editarBike from "../../controllers/editarBike";

const filepath = "http://localhost:3026/foto/public/";



export function Bike() {
    const [formBike, setFormBike] = useState({
        brand: "",
        category: "",
        description: "",
        hourlyvalue: "",
        dailyvalue: "",
        image: "",
    })
    const [category, setCategory] = useState<number>(998);
    const [newCategory, setNewCategory] = useState("")
    const [brand, setBrand] = useState<number>(998);
    const [newBrand, setNewBrand] = useState("")
    const [description, setDescription] = useState("");
    const [hourlyvalue, setHourlyvalue] = useState("");
    const [dailyvalue, setDailyvalue] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    
     const {id} = useParams();

  
    const editaBike = async function () {
      await editarBike( {id, brand, category, description, image, dailyvalue, hourlyvalue}) 
    }


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
        const idbrand = brand === 999 ? await handleNewBrand(newBrand) : brand
        const idcategory = category === 999 ? await handleNewCategory(newCategory) : category
    
    
        const bike = await CadastrarBike(
    
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
                  <FaSave
                size={60} // Tamanho do ícone (pode ser ajustado)
                color="#555657" // Cor do ícone (pode ser ajustada)
                onClick={handleNewBike} // Ação ao clicar no ícone
                style={{ cursor: "pointer" }} // Estilo do cursor
              />
              </ImageContainer>
    
            
    
              <TextArea
                placeholder="Insira aqui uma Descrição: (Ex: cor, tamanho, aro, etc.)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
    
              <SelectContainer>
                <select
                  value={brand}
                  onChange={(e) => setBrand(Number(e.target.value))}
                >
                  <option value={998}>Selecione uma marca</option>
                  {brands.map(({ name, id }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                  <option value={999}>Criar nova</option>
                </select>
              </SelectContainer>
    
              {brand === 999 && (
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
                  <option value={998}>Selecione uma Categoria</option>
                  {categories.map(({ name, id }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                  <option value={999}>Criar nova</option>
                </select>
              </SelectContainer>
    
              {category === 999 && (
                <Input
                  placeholder="Insira a Categoria, exemplo: MTB"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              )}
    
              <Input
                placeholder="Insira o valor por hora (somente números): Ex.: 15"
                value={hourlyvalue}
                onChange={(e) => setHourlyvalue(e.target.value)}
              />
    
              <Input
                placeholder="Insira o valor da diária (somente números): Ex.: 40"
                value={dailyvalue}
                onChange={(e) => setDailyvalue(e.target.value)}
              />
    
    
            </Form>
          </Box>
        </Container>
      );
    }