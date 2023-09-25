import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';


export default function Cadastro() {


    const [idUsuario, setidUsuario] = useState("");
    const [mailUsuario, setmailUsuario] = useState("");
    const [userName, setuserName] = useState("");
   
    const {handleLogOut} = useAuth()


    useEffect(() => {
        setidUsuario(JSON.parse(localStorage.getItem('idUsuario') || ''));
        setuserName(localStorage.getItem('userName') || '')
        setmailUsuario(localStorage.getItem('mail') || '');
        if (idUsuario) {
            setidUsuario(idUsuario);
        }
    }, [idUsuario]);



    return (
        <>
            <h3 style={{ color: 'white' }}>ID:{idUsuario}</h3>
            <h3 style={{ color: 'white' }}>email:{mailUsuario}</h3>
            <h3 style={{ color: 'white' }}>Nome do usuário:{userName}</h3>
            <button onClick={handleLogOut}>LOG-OUT</button>

        </>
    )
}