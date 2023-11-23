import { Button } from "react-bootstrap";
import { StyledCard } from "./cards-modules";
import { bikeEndpoint } from "../../service/bike";
import { useEffect, useState } from "react";
import { BasicRating } from '../rating/ratings';
import { MyNode, List } from "./list";
import ContactDialogs from "../modalDialog/modal";

const filepath = "http://localhost:3026/foto/public/";

interface BikeInterface {
  id: number;
  hourlyvalue: string;
  category: string;
  brand: string;
  status: string
  photos: { filename: string };
}

export function CardFiltro({ status, brand, category, id, hourlyvalue, photos }) {

  return (
    <>
      <StyledCard key={id}>
        <div>
          <p></p>
          <div className="corner-text-top-right">
            CATEGORIA: {category}
          </div>
          <div className="corner-text-top-left">
            MARCA: {brand}
          </div>
          <div className='image-container'>
            <img
              className="center-image"

              src={filepath + photos[0].filename}
              style={{ width: '200px', height: '200px' }}
              alt="Foto Bike"
            />
          </div>
          <div className="corner-text-bottom-left">STATUS: {status}</div>
          <div className="corner-text-bottom-right">
            R$ {hourlyvalue} / h
          </div>
          <BasicRating id={id} />
          <Button key={id} variant="outline-primary" className="bottom-button">
            <ContactDialogs idBike={id} />
          </Button>
        </div>
      </StyledCard>
    </>
  );
}

export default CardFiltro;
