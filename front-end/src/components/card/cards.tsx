//import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { StyledCard } from './cards-modules';
import Bike from '../../assets/bike1.jpg';
//import axios from "axios";




function CardBike() {
/* 
  const [idUsuario, setidUsuario] = useState("");

const url = `https://localhost:3026/${bikes}`;
const obterBike = () => {
  axios
  .get(url)
  //o conteúdo da resposta da requisição será colocada no objeto data,
  //por este motivo fez-se a desestruturação
  .then( r => {
    console.log(r);
    return r;
  })
  .then(({ data }) => {
    setResposta(JSON.stringify(data));
    setLogadouro(JSON.stringify(data.logradouro));
  });
};
}; 

  useEffect(() => {
    setidUsuario(JSON.parse(localStorage.getItem("idUsuario") || ""));
  
    if (idUsuario) {
      setidUsuario(idUsuario);
    }
  }, [idUsuario]);


*/
  return (
    <StyledCard>
      {/* Texto no canto superior direito */}
      <div className="corner-text-top-right">CATEGORIA:</div>

      {/* Texto no canto superior esquerdo */}
      <div className="corner-text-top-left">MARCA:</div>

      {/* Imagem no centro */}
      <img className="center-image"  src={Bike} style={{width: '200px', height: '200px'}} alt="Foto Bike" />

      {/* Texto no canto inferior esquerdo */}
      <div className="corner-text-bottom-left">STATUS:</div>

      {/* Texto no canto inferior direito */}
      <div className="corner-text-bottom-right">R$ / h</div>



      {/* Botão no final do Card */}
      <Button variant="contained" color="primary" className="bottom-button">
        RESERVAR
      </Button>
    </StyledCard>
  );
}

export default CardBike;