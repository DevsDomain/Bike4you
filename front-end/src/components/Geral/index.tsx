import { useEffect, useState } from "react";
import { bikeEndpoint } from "../../service/bike";
import { BikeProps } from "../../types";
import { MeuEstilo } from "./styles";
import Disponibilidade from "../Disponibilidade_bike";
import EditarBike from "../EditarBike/EditarBike";


export function Geral() {
  const [bikes, setBikes] = useState([] as BikeProps[]);
  const [bikeCounter, setBike] = useState(0)

  const id = localStorage.getItem('idUsuario')

  useEffect(() => {
    function relatorio() {


      fetch(bikeEndpoint + `/geral?idUser=${id}`)
        .then(r => r.json())
        .then(r => setBikes(r))
    }

    relatorio();

  }, [])

  console.log("TAMANHO DO ARRAY DE BIKES:", bikes.length)
  return (
    <MeuEstilo>
      <div className="caixa-de-formulario">
        <table>
          <thead>
            <tr>
              <th>ID Bike</th>
              <th>Status</th>
              <th>Descrição</th>
              <th>Media</th>
              <th>Editar</th>
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
                    <td key={bike.media}>{bike.media}</td>
                    <td key={bike.cod_bike}><EditarBike idBike={bike.cod_bike} /> </td>

                  </tr>)

                : bikes.length === 1 ?
                  <tr key={Math.random()}>
                    <td key={bikes[0].cod_bike}>{bikes[0].cod_bike || ''}</td>
                    <td key={bikes[0].status}><Disponibilidade idBike={bikes[0].cod_bike} />  </td>
                    <td key={bikes[0].description}>{bikes[0].description}</td>
                    <td key={bikes[0].media}>{bikes[0].media}</td>

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