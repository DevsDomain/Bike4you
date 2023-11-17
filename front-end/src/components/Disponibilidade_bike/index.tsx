import { useEffect, useState } from "react";
import { bikeEndpoint } from "../../service/bike";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Disponibilidade({ idBike }) {
  const [status, setStatus] = useState("")
  console.log("ID DA BIKE RECEBIDO PELO COMPONENTE DISPONIBILIDADE!", idBike)

  useEffect(() => {
    if (idBike >= 0) {

      fetch(bikeEndpoint + `/detalhe?id=${idBike}`)
        .then(r => r.json())
        .then(({ status }) => {
          setStatus(status)
        })

    }
  }, [])


  async function updateBikeStatus(status: string) {
    const ok = window.confirm("Tem certeza?")
    if (ok) {
      let data = { id: idBike, status: status }
      const statusUpdated = await fetch(bikeEndpoint + "/status", {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      statusUpdated.status === 201 ? setStatus(status)
        : alert("Erro ao editar status de bicicleta!")
    }

  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Disponibilidade</InputLabel>

        <Select value={status} defaultValue={status} onChange={(e) => updateBikeStatus(e.target.value)}
        sx={{ width: '50%', mx: 'auto'  }}
        >

          <MenuItem value={"Disponivel"}>Disponivel</MenuItem>
          <MenuItem value={"Alugada"}>Alugada</MenuItem>
          <MenuItem value={"Pendente"}>Pendente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )


}