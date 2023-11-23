import { useEffect, useState } from "react";
import { detalheEndpoint } from "../../service/detalhe";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/joy";
import { useParams } from "react-router-dom";
import { BasicRating } from "../../components/rating/ratings";
import ContactDialogs from "../../components/modalDialog/modal";


const filepath = "http://localhost:3026/foto/public/";

interface BikeInterface {
  id: number;
  hourlyvalue: string;
  dailyvalue: string;
  category: { name: string };
  brand: { name: string };
  description: string;
  status: string;
  photos: { filename: string }[];
}




export default function Detalhes() {
  const [bikes, setBikes] = useState({} as BikeInterface);
  const {id} = useParams();


  useEffect(() => {
    async function BuscarBike() {
      const response = await fetch(detalheEndpoint + `?id=${id}`);
      const data = await response.json();
      return data;
    }

    BuscarBike().then((res) => {
      setBikes(res);
      console.log("res:", res);

    });
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Card sx={{ width: 800 , marginTop: '50px'}}>
      <div>
        <Typography level="title-lg">
          Marca: {bikes.brand ? bikes.brand.name : "Marca não disponível"}
        </Typography>
        <Typography level="title-lg">
          Categoria:{" "}
          {bikes.category ? bikes.category.name : "Marca não disponível"}
        </Typography>
      </div>
      {bikes.photos && bikes.photos.length > 0 && (
        <AspectRatio minHeight="120px" maxHeight="500px">
          <img
            src={filepath + bikes.photos[0].filename}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      )}
      <CardContent orientation="horizontal">
        <div>
          <Typography fontSize="lg" fontWeight="lg">
            Descrição:
          </Typography>
          <Card sx={{ width: 600 }}>
            <Typography level="body-md">{bikes.description}</Typography>
          </Card>
          <Typography level="body-xs">Valor por Hora:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {bikes.hourlyvalue}
          </Typography>
          <Typography level="body-xs">Valor por Dia:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {bikes.dailyvalue}
          </Typography>
          <Typography level="body-xs">Disponibilidade:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {bikes.status}
          </Typography>
          <Typography level="body-xs">Avaliação:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          <BasicRating id={bikes.id} />
          </Typography>
        </div>

        <Button
          variant="soft"
          size="md"
          color="primary"
          aria-label="Explore Bike"
          sx={{ m: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          <ContactDialogs idBike={bikes.id} /> 
        </Button>
      </CardContent>
    </Card>

    </Box>
  );
}