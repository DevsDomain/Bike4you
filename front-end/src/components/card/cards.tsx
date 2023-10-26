import { Button } from 'react-bootstrap';
import { StyledCard } from './cards-modules';
import Bike from '../../assets/bike1.jpg';
import { bikeEndpoint } from '../../service/bike';
import { useEffect, useState } from "react";

const filepath = "http://localhost:3026/foto/public/"

interface BikeInterface {
  id: number,
  hourlyvalue: string,
  category: string,
  brand: string,
  photos: { filename: string }
}

function CardBike() {
  const [bikes, setBikes] = useState<Array<BikeInterface>>([]);

  useEffect(() => {
    async function BuscarBikes() {
      const response = await fetch(bikeEndpoint);
      const data = await response.json();
      console.log(data)
      const formattedBikes = data.map(({ id, hourlyvalue, brand, category, photos }) => ({
        id,
        hourlyvalue,
        brand: brand.name,
        category: category.name,
        photos: photos
      }));
      setBikes(formattedBikes);
      console.log(bikes)
    }

    BuscarBikes();
  }, [bikes]);

  return (
    <>
      {bikes.map((bike, key) => (
        <StyledCard key={key}>
          <div >
          <p></p>
          <div className="corner-text-top-right" key={bike.category + key}>CATEGORIA: {bike.category}</div>
          <div className="corner-text-top-left" key={bike.brand + key}>MARCA: {bike.brand}</div>
          <div className='image-container'>
          <img className="center-image" key={bike.photos[0].filename} src={filepath + bike.photos[0].filename} style={{ width: '200px', height: '200px' }} alt="Foto Bike" />
          </div>
          <div className="corner-text-bottom-left">STATUS: Disponível</div>
          <div className="corner-text-bottom-right" key={bike.hourlyvalue + key}>R$ {bike.hourlyvalue} / h</div>
          <Button key={bike.id} variant="contained" color="primary" className="bottom-button">
            RESERVAR
          </Button>
          </div>
        </StyledCard>
      ))}
    </>
  );
}

export default CardBike;
