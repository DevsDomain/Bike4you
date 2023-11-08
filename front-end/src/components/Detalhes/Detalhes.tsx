import React, { useEffect, useState } from "react";
import { detalheEndpoint } from "../../service/detalhe";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

const filepath = "http://localhost:3026/foto/public/";

interface BikeInterface {
  id: number;
  hourlyvalue: string;
  dailyvalue: string;
  category: { name: string };
  brand: { name: string };
  description: string;
  photos: { filename: string }[];
}

export default function Detalhes() {
  const [bikes, setBikes] = useState({} as BikeInterface);

  useEffect(() => {
    async function BuscarBike() {
      const response = await fetch(detalheEndpoint);
      const data = await response.json();
      return data;
    }

    BuscarBike().then((res) => {
      setBikes(res);
      console.log("res:", res);
    });
  }, []);
  return (
    <Card sx={{ width: 400 }}>
      <div>
        <Typography level="title-lg">
          {" "}
          {bikes.brand ? bikes.brand.name : "Marca não disponível"}
        </Typography>
        <Typography level="title-lg">
          {" "}
          {bikes.category ? bikes.category.name : "Marca não disponível"}
        </Typography>
      </div>
      {bikes.photos && bikes.photos.length > 0 && (
        <AspectRatio minHeight="120px" maxHeight="300px">
          <img
            src={filepath + bikes.photos[0].filename}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      )}
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Descrição:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {bikes.description}
          </Typography>
          <Typography level="body-xs">Valor por Hora:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {bikes.hourlyvalue}
          </Typography>
          <Typography level="body-xs">Valor por Dia:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {bikes.dailyvalue}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bike"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Reservar
        </Button>
      </CardContent>
    </Card>
  );
}
{
  /*<>
      <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          {bikes.photos && bikes.photos.length > 0 ? (
            <img src={filepath + bikes.photos[0].filename} alt="" />
          ) : null}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">
          Categoria:{" "}
          {bikes.category ? bikes.category.name : "Categoria não disponível"}
        </Typography>
        <Typography fontWeight="md" color="neutral" textColor="text.primary">
          Marca: {bikes.brand ? bikes.brand.name : "Marca não disponível"}
        </Typography>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Valor por Dia: {bikes.dailyvalue}
            </Chip>
          }
        >
          Valor por Hora: {bikes.hourlyvalue}
        </Typography>
        <Typography level="body-sm">Descrição: {bikes.description}</Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
      <ul>
        {bikes.photos && bikes.photos.length > 0 ? (

            <img src={filepath + bikes.photos[0].filename} alt="" />

        ) : null}
        <li>
          Marca: {bikes.brand ? bikes.brand.name : "Marca não disponível"}
        </li>{" "}
        <li>
          Categoria:{" "}
          {bikes.category ? bikes.category.name : "Categoria não disponível"}
        </li>{" "}
        <li>Descrição: {bikes.description}</li>
        <li>Valor por Hora: {bikes.hourlyvalue}</li>
        <li>Valor por Dia: {bikes.dailyvalue}</li>
      </ul>
    </>
  );
}
*/
}
