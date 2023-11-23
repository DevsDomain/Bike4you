import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { MdPersonSearch } from "react-icons/md";
import { useEffect, useState } from 'react';
import { userEndpoint } from '../../service/user';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



interface Cliente {
  id: string
  nome: string
  mail: string
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

export default function ContactDialogs({ id, idBike }) {
  const [open, setOpen] = useState(false);
  const [cliente, setCliente] = useState<Cliente[]>([])
  const [searchClient, setSearchClient] = useState("")
  const [rentVisible, setVisible] = useState(false)
  const [media, setMedia] = useState(0)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  async function OwnerData() {
    const query = await fetch(userEndpoint + `/modal`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: searchClient })
    })
    query.json().then((res) => {
      setCliente(res);
    })
  }


  async function handleMedia(client: Cliente) {
    setCliente([client])
    setVisible(true)
  }

  async function contract() {
    await fetch("http://localhost:3026/rent/owner", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idowner: id, ownervaluation: media, idClient: cliente[0].id, bike: idBike })
    }).then((res) => {
      res.status === 201 && alert("Avaliação gerada com sucesso!")
      setOpen(false)

      res.status !== 201 && alert("Erro ao gerar avaliação")
    })


  }

  return (
    <>
      <Button size='small' variant="text" color="primary" onClick={handleClickOpen} sx={{ fontWeight: "100" }} >
        Gerar Avaliação
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >



        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" >
          <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
            <TextField onChange={e => setSearchClient(e.target.value)} id="outlined-basic" label="Nome do Cliente" variant="outlined" />
            <MdPersonSearch onClick={OwnerData} style={{ width: '25px', height: '25px' }} />
          </div>
        </DialogTitle>

        <DialogContent dividers>

          <List sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>

            {cliente ?
              cliente.map((user, index) => (
                <>

                  <Typography gutterBottom >
                    <ListItem alignItems="flex-start" key={index}>

                      <ListItemText
                        primary={user.nome}
                        secondary={
                          <>
                            <ListItemText primary={`Email:${user.mail}`}
                              secondary={`Telefone:${user.phone}`} />

                          </>
                        }
                      />
                      <Button key={user.nome} onClick={e => handleMedia(user)}>Selecionar</Button>

                    </ListItem>
                    {rentVisible && <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <TextField onChange={e => setMedia(Number(e.target.value))} id="outlined-basic" label="Média de 0 a 5" variant="outlined" />
                      <Button size='small' variant="text" color="primary" onClick={contract} sx={{ fontWeight: "100" }} >
                        Enviar avaliação
                      </Button>
                    </div>}


                  </Typography>

                </>
              ))
              : <>
                <p>Usuário não encontrado!</p>
              </>}
          </List>



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