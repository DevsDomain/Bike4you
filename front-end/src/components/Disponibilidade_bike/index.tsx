import { useEffect, useState } from "react";
import { bikeEndpoint } from "../../service/bike";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Disponibilidade({ idBike }) {
  const [status, setStatus] = useState("")


  useEffect(() => {
    function relatorio() {
      fetch(bikeEndpoint + `/detalhe?id=${idBike}`)
        .then(r => r.json())
        .then(({ status }) => {
          setStatus(status)
        })
    }
    relatorio();
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

        <Select value={status} defaultValue={status} onChange={(e) => updateBikeStatus(e.target.value)}>

          <MenuItem value={"Disponivel"}>Disponivel</MenuItem>
          <MenuItem value={"Alugada"}>Alugada</MenuItem>
          <MenuItem value={"Pendente"}>Pendente</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )


}



/* 

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
 */