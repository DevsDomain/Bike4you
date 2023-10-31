import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useEffect, useState } from 'react';
import { detalheEndpoint } from '../../service/detalhe';

const filepath = "http://localhost:3026/foto/public/"

interface BikeInterface {
  id: number,
  hourlyvalue: string,
  dailyvalue: string,
  category: string,
  brand: string,
  description: string,
  photos: { filename: string }
}

export default function Detalhes() {
    const [bikes, setBikes] = useState({}as BikeInterface);

    useEffect(() => {
      async function BuscarBikes() {
        const response = await fetch(detalheEndpoint);
        const data = await response.json();
        setBikes(data);
        console.log(bikes);
      }
  
      BuscarBikes();
    }, []);
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Box
        sx={{
          '&::before': {
            top: '4px',
            content: '""',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            content: '""',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      />
      <>

     {/*  <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={filepath + bike.photos[0].filename}
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {bike.brand}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
          {bike.category}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Descrição
              </Typography>
              <Typography fontWeight="lg">{bike.description}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Valor por Hora
              </Typography>
              <Typography fontWeight="lg">{bike.hourlyvalue}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Valor por Dia
              </Typography>
              <Typography fontWeight="lg">{bike.dailyvalue}</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card> */}

      </>
    </Box>
  );
}