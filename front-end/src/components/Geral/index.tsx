import { useEffect, useState } from "react";
import { bikeEndpoint } from "../../service/bike";
import { BikeProps } from "../../types";
import { MeuEstilo } from "./styles";
import { FiFilePlus } from "react-icons/fi";
import ContactDialogs from '../modalRentOwner/modal'

import Disponibilidade from "../Disponibilidade_bike";
import { Button } from "react-bootstrap";


export function Geral() {
  const [bikes, setBikes] = useState([] as BikeProps[]);
  const [bikeCounter, setBikeCounter] = useState(0); 

  const id = localStorage.getItem('idUsuario')


  useEffect(() => {
    function relatorio() {
      fetch(bikeEndpoint + `/geral?idUser=${id}`)
        .then(r => r.json())
        .then(data => {
          if (Array.isArray(data)) {
            // Ordenar bikes em ordem crescente com base no ID Bike
            const sortedBikes = data.sort((a, b) => a.cod_bike - b.cod_bike);

            setBikes(sortedBikes);

            // Calcular o total de bikes
            const totalBikes = data.length;
            setBikeCounter(totalBikes);
          }
        })
    }
    relatorio();
  }, [])

  console.log("TAMANHO DO ARRAY DE BIKES:", bikes.length)

  return (
    <MeuEstilo>
      <div className="caixa-de-formulario">
      <p style={{ color: 'black', fontWeight: 'bold' }}>Bikes Cadastradas: {bikeCounter}</p>
        <table>
          <thead>
            <tr>
              <th>ID Bike</th>
              <th>Status</th>
              <th>Descrição</th>
              <th>Media</th>
            </tr>
          </thead>
          <tbody>
            {
              bikes.length > 1 ?
                bikes.map((bike, index) =>
                  <tr key={index}>
                    <td key={bike.cod_bike}>{bike.cod_bike || ''}</td>
                    <td key={bike.status}><Disponibilidade idBike={bike.cod_bike} />  </td>
                    <td key={bike.description}>{bike.description}</td>
                    <td key={bike.media}>{bike.media} <Button  variant="outline-primary" className="bottom-button-sm"><ContactDialogs id={id} key={'teste'}/></Button></td>
                  </tr>)
                : bikes.length === 1 ?
                  <tr key={Math.random()}>
                    <td key={bikes[0].cod_bike}>{bikes[0].cod_bike || ''}</td>
                    <td key={bikes[0].status}><Disponibilidade idBike={bikes[0].cod_bike} />  </td>
                    <td key={bikes[0].description}>{bikes[0].description}</td>
                    <td key={bikes[0].media}>{bikes[0].media} <Button  variant="outline-primary" className="bottom-button-sm"><ContactDialogs id={id} key={'teste'}/></Button></td>
                  </tr>
                  : <></>
            }
          </tbody>
        </table>
      </div>
    </MeuEstilo>
  );
}

export default Geral;