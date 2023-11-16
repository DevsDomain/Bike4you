import { useEffect, useState } from "react";
import { bikeEndpoint } from "../../service/bike";
import { BikeProps } from "../../types";
import { MeuEstilo } from "./styles";
import Disponibilidade from "../Disponibilidade_bike";


export function Geral() {
  const [bikes, setBikes] = useState<BikeProps[]>([]) || null;

  const id = localStorage.getItem('idUsuario')


  useEffect(() => {
    async function relatorio() {
      try {
        const geral = (await fetch(bikeEndpoint + `/geral?id=${id}`)).json()
        return geral
      } catch (error) {return null }
    }

    relatorio().then((bike: BikeProps) => {
      if (bike) {
        setBikes([{ cod_bike: bike.cod_bike, description: bike.description, media: bike.media, status: bike.status }])
      }
    })

  }, [id])


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
              bikes &&
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