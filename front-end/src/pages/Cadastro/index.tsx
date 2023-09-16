import { useEffect, useState } from 'react';


export default function Cadastro() {


    const [idUsuario, setidUsuario] = useState("");
    const [mailUsuario, setmailUsuario] = useState("");
    const [aliasUsuario, setAliasUsuario] = useState("");


    useEffect(() => {
        setidUsuario(JSON.parse(localStorage.getItem('idUsuario') || ''));
        setAliasUsuario(localStorage.getItem('alias') || '')
        setmailUsuario(localStorage.getItem('mail') || '');
        if (idUsuario) {
            setidUsuario(idUsuario);
        }
    }, [idUsuario]);


    return (
        <>
            <h3 style={{ color: 'white' }}>ID:{idUsuario}</h3>
            <h3 style={{ color: 'white' }}>Alis:{mailUsuario}</h3>
            <h3 style={{ color: 'white' }}>E-mail:{aliasUsuario}</h3>

        </>
    )
}