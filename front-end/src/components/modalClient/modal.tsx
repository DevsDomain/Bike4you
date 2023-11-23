import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ContactDialogs({ idContrato, locatario, client }) {
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState(0)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  async function contract() {
    await fetch("http://localhost:3026/rent", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientvaluation: client, id: idContrato })
    }).then((res) => {
      res.status === 201 && alert("Avaliação Gerada com sucesso!")
      setOpen(false)

      res.status !== 201 && alert("Erro ao gerar avaliação")
    })


  }

  return (
    <>
      <Button size='small' variant="text" color="primary" onClick={handleClickOpen} sx={{ fontWeight: "100" }} >
        Avaliar
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >



        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" >
          <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
            Avalie sua experiência
            <p >Dê uma nota de 0 a 5 para a Bike de {locatario}</p>

          </div>
        </DialogTitle>

        <DialogContent dividers>

          <TextField onChange={e => setMedia(Number(e.target.value))} id="outlined-basic" label="Média de 0 a 5" variant="outlined" />
          <Button size='small' variant="text" color="primary" onClick={contract} sx={{ fontWeight: "100" }} >
            Enviar avaliação
          </Button>



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