import { useEffect, useState } from "react";
import { MeuEstilo } from "./styles";
import { bikeEndpoint } from "../../service/bike";

export function Geral() {

  const [code_bike, setCode_bike] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const numRows = 10;
  const numCols = 4;


  const id = localStorage.getItem('idUsuario')


  useEffect(() => {
    async function relatorio() {
      const geral = (await fetch(bikeEndpoint + `/geral?idUser=${id}`)).json()
      return geral
    }

    relatorio().then(({ cod_bike, description, media, status }) => {
      // PASSAR VALORES PARA AS VARIÁVEIS AQUI:
      // EXEMPLO:
      setCode_bike(cod_bike)
      setStatus(status)
      setDescription(description)
      setMedia(media)
    })

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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </MeuEstilo>
  );
}

export default Geral;