import { useEffect, useState } from "react";
import { bikeEndpoint } from "../../service/bike";
import { BikeProps } from "../../types";
import { MeuEstilo } from "./styles";
import Disponibilidade from "../Disponibilidade_bike";


export function Geral() {
  const [bikes, setBikes] = useState([] as BikeProps[]);

  const id = localStorage.getItem('idUsuario')

  useEffect(() => {
    function relatorio() {


      fetch(bikeEndpoint + `/geral?idUser=${id}`)
        .then(r => r.json())
        .then(r => setBikes(r))
    }

    relatorio();

  }, [])


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
            </tr>
          </thead>
          <tbody>
            {
              bikes.map((bike, index) =>
                <tr key={index}>
                  <td key={bike.cod_bike}>{bike.cod_bike}</td>
                  <td key={bike.status}><Disponibilidade idBike={bike.cod_bike} /> </td>
                  <td key={bike.description}>{bike.description}</td>
                  <td key={bike.media}>{bike.media}</td>
                </tr>)
            }
          </tbody>



        </table>
      </div>
    </MeuEstilo>
  );
}

export default Geral;