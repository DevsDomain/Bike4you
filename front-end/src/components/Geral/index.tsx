import { useEffect, useState } from "react";
import BuscarBikes from "../../pages/Buscar Bikes/BuscarBikes";
import { bikeEndpoint } from "../../service/bike";
import { BikeProps } from "../../types";
import { MeuEstilo } from "./styles";


export function Geral() {
  const [bikes, setBikes] = useState([] as BikeProps[]);
  const [code_bike, setCode_bike] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const numRows = 10;
  const numCols = 4;


  const id = localStorage.getItem('idUsuario')


  useEffect(() => {
    function relatorio() {
      /*const r = await (await fetch(bikeEndpoint + `/geral?idUser=${id}`)).json();
      console.log("geral", r)
      setBikes(r);*/

      fetch(bikeEndpoint + `/geral?idUser=${id}`)
        .then(r => r.json())
        .then(r => setBikes(r))
    }

    relatorio();

  }, [id])


  useEffect(() => {

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
              bikes.map(bike =>
                <tr>
                  <td>{bike.cod_bike}</td>
                  <td>{bike.status}</td>
                  <td>{bike.description}</td>
                  <td>{bike.media}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </MeuEstilo>
  );
}

export default Geral;