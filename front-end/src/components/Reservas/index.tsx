import { useEffect, useState } from "react";
import { BikeProps } from "../../types";
import { MeuEstilo } from "./styles";
import Button from '@mui/material/Button';

import ContactDialogs from "../modalClient/modal";
interface Contrato {
  id: string
  bike: BikeProps
  date: string,
  clientvaluation: string,
  owner: {
    userName: string,
    phone: string

  }
}

export function Reservas() {
  const [data, setData] = useState([] as Contrato[]);

  const id = localStorage.getItem('idUsuario')


  useEffect(() => {
    async function contract() {
      await fetch("http://localhost:3026/rent/client", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ client: id })
      }).then((res) => {
        res.json().then((r) => {
          setData(r)
        })
      })


    }

    contract()

  }, [])

  return (
    <MeuEstilo>
      <div className="caixa-de-formulario">
        <table>
          <thead>
            <tr>
              <th>ID Contrato</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Locatário</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 1 ?
                data.map((bike, index) =>
                  <tr key={index}>
                    <td key={bike.id}>{bike.id || ''}</td>
                    <td key={bike.date}>{bike.date}</td>
                    <td key={bike.bike.description}>{bike.bike.description}</td>
                    <td key={bike.owner.userName}>{bike.owner.userName}
                      {!bike.clientvaluation && <Button className="bottom-button-sm"><ContactDialogs idContrato={bike.id} client={id} locatario={bike.owner.userName} key={'teste'} /></Button>
                      }
                    </td>
                  </tr>)
                : data.length === 1 ?
                  <tr key={Math.random()}>
                    <td key={data[0].id}>{data[0].id || ''}</td>
                    <td key={data[0].date}>{data[0].date}</td>
                    <td key={data[0].bike.description}>{data[0].bike.description}</td>
                    <td key={data[0].owner.userName}>{data[0].owner.userName}<Button className="bottom-button-sm"><ContactDialogs idContrato={data[0].id} locatario={data[0].owner.userName} client={id} key={'teste'} /></Button></td>
                  </tr>
                  : <></>
            }
          </tbody>
        </table>
      </div>
    </MeuEstilo>
  );
}

export default Reservas;