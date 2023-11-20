import React, { useEffect, useState } from "react";
import { detalheEndpoint } from "../../service/detalhe";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/joy";
import { Link, useParams } from "react-router-dom";
import { BasicRating } from "../../components/rating/ratings";


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




export default function EditarBike({idBike}) {

  return (
    <>
    <Link to={`/editar/${idBike}`}>
    <Button  color="primary">
      Editar
      </Button>
        </Link>
          </>
  );
}
