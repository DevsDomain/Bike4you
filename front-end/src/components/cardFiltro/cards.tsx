import { Button } from "react-bootstrap";
import { StyledCard } from "./cards-modules";
import { BasicRating } from '../rating/ratings';
import ContactDialogs from "../modalDialog/modal";
import { Link } from "react-router-dom";
import React from "react";

const filepath = "http://localhost:3026/foto/public/";

export function CardFiltro({  status, brand, category,id,hourlyvalue,photos  }) {


  return (
    <>
        <StyledCard key={Math.random()}>
          <div>
            <p></p>
            <div className="corner-text-top-right" >
              CATEGORIA: {category}
            </div>
            <div className="corner-text-top-left" >
              MARCA: {brand}
            </div>
            <div className='image-container'>
              <img
                className="center-image"
                key={photos}
                src={filepath + photos[0].filename}
                style={{ width: '200px', height: '200px' }}
                alt="Foto"
              />
            </div>
            <div className="corner-text-bottom-left"> STATUS: {status} </div>
            <div className="corner-text-bottom-right" key={hourlyvalue}>
              R$ {hourlyvalue} / h
            </div>
            <BasicRating id={id} />
            <div className="div-card">
            <Button key={id} className="bottom-button3">
            <p style={{fontSize:'15px', fontWeight:'bold'}}></p>
              <ContactDialogs idBike={id} />
            </Button>

            <Link to={`/detalhes/${id}`}>
            <Button key={id} className="bottom-button4">
              <p style={{fontSize:'15px', fontWeight:'bold', color: 'blue'}}>DETALHES</p>
            </Button>
            </Link>
            </div>
          </div>
        </StyledCard>
     
    </>
  );
}
export default CardFiltro;
