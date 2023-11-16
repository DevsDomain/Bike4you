import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { bikeEndpoint } from '../../service/bike';

interface Owner {
  nome: string
  email: string
  phone: string
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ContactDialogs({ idBike }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Owner>({
    nome: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    async function OwnerData() {
      const query = await fetch(bikeEndpoint+`/modal?idBike=${idBike}`);
      query.json().then((res) => {
        setData(res);
      })
    }
    OwnerData()
  }, [])


  console.log(data)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Reservar!
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >



        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Nome do locador: {data.nome}
        </DialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>
            Telefone: {data.phone}
          </Typography>
          <Typography gutterBottom>
            E-mail: {data.email}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}