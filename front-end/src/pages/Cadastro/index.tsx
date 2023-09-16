import { useEffect, useState } from 'react';


export default function Cadastro() {


    const [idUsuario, setidUsuario] = useState([]);

    useEffect(() => {
        const idUsuario = JSON.parse(localStorage.getItem('idUsuario') || '');
        if (idUsuario) {
            setidUsuario(idUsuario);
        }
    }, []);


    return (
        <>
            <h3 style={{ color: 'white' }}>ID:{idUsuario}</h3>
        </>
    )
}