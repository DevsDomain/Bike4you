import { useState, useEffect } from "react";
import Navegacao from "../../components/Navegacao/Navegacao";
import Produto from "../../components/Produtos/Produtos";
import Recomendado from "../../components/Recomendado/Recomendado";
import Sidebar from "../../components/SideBar/Sidebar";
import CardBike from "../../components/card/cards";
import { bikeEndpoint } from "../../service/bike";


interface BikeInterface {
  id: number;
  hourlyvalue: string;
  category: string;
  brand: string;
  status: string
  photos: { filename: string };
}


export default function BuscarBikes() {
  const [selectedBikes, setSelectedBikes] = useState<BikeInterface[]>([]);  
  

  useEffect(() => {
    async function BuscarBikes() {
      const response = await fetch(bikeEndpoint + `?cards=$`);
      const data = await response.json();
      console.log(data);
      

    }
    BuscarBikes();
  }, []);


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
    setSelectedBikes(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedBikes(event.target.value);
  };

  function filteredData(bikes, selected, query) {
    let filteredBikes = bikes;

    // Filtering Input Items
    if (query) {
      filteredBikes = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredBikes = filteredBikes.filter(
        ({ brand, category, status}) =>
          brand === selected ||
          category === selected ||
          status === selected                   
      );
    }

    return filteredBikes.map(
      ({ brand, category, photos, status}) => (
        <CardBike
          key={Math.random()}
          brand={brand.name}
          category={category.name}                    
        />
      )
    );
  }

  const result = filteredData(bikes, selectedBikes, query);

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