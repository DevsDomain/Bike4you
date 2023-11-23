import { Button } from "react-bootstrap";
import { StyledCard } from "./cards-modules";
import { bikeEndpoint } from "../../service/bike";
import { useEffect, useState } from "react";
import { BasicRating } from '../rating/ratings';
import { MyNode, List } from "./list";
import ContactDialogs from "../modalDialog/modal";
import { Link } from "react-router-dom";

const filepath = "http://localhost:3026/foto/public/";

interface BikeInterface {
  id: number;
  hourlyvalue: string;
  category: string;
  brand: string;
  status: string
  photos: { filename: string };
}

function CardBike({ take }) {
  const [bikes, setBikes] = useState<BikeInterface[]>([]);
  const bikeList = new List<BikeInterface>();

  useEffect(() => {
    async function BuscarBikes() {
      const response = await fetch(bikeEndpoint + `?cards=${take}`);
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

      formattedBikes.forEach((bike) => {
        bikeList.add(new MyNode(bike));
      });

      const bikeArray: BikeInterface[] = [];
      let current = bikeList.start;
      while (current && current.value) {
        bikeArray.push(current.value);
        current = current.next;
      }

      setBikes(bikeArray.slice(0,take));
      console.log(bikeArray);

    }
    BuscarBikes();
  }, [take]);

  return (
    <>
      {bikes.map((bike, key) => (
        <StyledCard key={key}>
          <div>
            <p></p>
            <div className="corner-text-top-right" key={bike.category + key}>
              CATEGORIA: {bike.category}
            </div>
            <div className="corner-text-top-left" key={bike.brand + key}>
              MARCA: {bike.brand}
            </div>
            <div className='image-container'>
              <img
                className="center-image"
                key={bike.photos[0].filename}
                src={filepath + bike.photos[0].filename}
                style={{ width: '200px', height: '200px' }}
                alt="Foto Bike"
              />
            </div>
            <div className="corner-text-bottom-left">STATUS: {bike.status}</div>
            <div className="corner-text-bottom-right" key={bike.hourlyvalue + key}>
              R$ {bike.hourlyvalue} / h
            </div>
            <BasicRating id={bike.id} />
            <div className="div-card">
            <Button key={bike.id} variant="outline-primary" className="bottom-button">
              
              <ContactDialogs idBike={bike.id} />
            </Button>

            <Link to={`/detalhes/${bike.id}`}>
            <Button variant="outline-primary" color="primary" className="bottom-button2">
              <p style={{fontSize:'15px', fontWeight:'bold'}}>DETALHES</p>
            </Button>
            </Link>
            </div>
          </div>
        </StyledCard>
      ))}
    </>
  );
}

export default CardBike;
