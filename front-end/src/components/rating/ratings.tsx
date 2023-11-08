import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function BasicRating({id}) {

  const [value, setValue] = useState<number | null>(null);
  useEffect(() => {
    async function BuscarBikes() {
      const valorBanco= await fetch(`http://localhost:3026/rent/rate?idBike=${id}`);
      const data = await valorBanco.json();
      return data.bikeRate
    }

    BuscarBikes().then((valor) =>{
      setValue(valor)
      console.log(valor)
    })
  }, []);

  
  return (
    <Box
      sx={{
        "& > legend": { mt: 0 },
      }}
    >
    
      <Typography component="legend"></Typography>
      <Rating name="read-only" value={value} readOnly precision={0.5}/>

    </Box>
  );
}

export {BasicRating};