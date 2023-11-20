import { useState, useEffect } from "react";
import Navegacao from "../../components/Navegacao/Navegacao";
import Produto from "../../components/Produtos/Produtos";
import Recomendado from "../../components/Recomendado/Recomendado";
import Sidebar from "../../components/SideBar/Sidebar";
import { bikeEndpoint } from "../../service/bike";
import CardBike from "../../components/card/cards";
import CardFiltro from "../../components/card copy/cards";

export default function BuscarBikes() {

interface BikeInterface {
  id: number;
  hourlyvalue: string;
  category: string;
  brand: string;
  status: string
  photos: { filename: string };
}

  const [bikes, setBikes] = useState<BikeInterface[]>([]);
  
  useEffect(() => {
    async function Buscar_Bikes() {
      const response = await fetch(bikeEndpoint + `?cards=20`);
      const data = await response.json();
      console.log(data);
      const formattedBikes = data.map(
        ({ id, hourlyvalue, brand, category, photos, status }) => ({
          id,
          hourlyvalue,
          status: status,
          brand: brand.name,
          category: category.name,
          photos: photos,
        })
      );
      
      setBikes(formattedBikes);
      console.log(formattedBikes);

    }
    Buscar_Bikes();
  }, []);

  // ----------- Input Filter -----------
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = bikes.filter(
    (bikes) => bikes.brand.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(bikes, selected, query) {
    let filteredbikes = bikes;

    // Filtering Input Items
    if (query) {
      filteredbikes = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredbikes = filteredbikes.filter(
        ({status, brand, category,id,
          hourlyvalue,
          photos}) =>
          category === selected ||
          status === selected ||
          brand === selected ||
          id === selected ||
          hourlyvalue === selected ||
          photos === selected
          
         
      );
    }

    return filteredbikes.map(
      ({ status, brand, category,id,hourlyvalue,photos },index) => (
        <CardFiltro brand={brand} category={category}
        status={status} key={index} id={id} hourlyvalue={hourlyvalue} photos={photos}/>

        
      )
    );
  }

  const result = filteredData(bikes, selectedCategory, query);

  return (
    <>
      <div>
        <Sidebar handleChange={handleChange}/>
        <Navegacao query={query} handleInputChange={handleInputChange}/>
        <Recomendado handleClick={handleClick}/>
        <Produto result={result}/>        
      </div>
    </>
  );
}