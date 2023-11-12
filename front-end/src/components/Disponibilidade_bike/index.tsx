import { useEffect, useState } from "react";
import { bikeEndpoint } from "../../service/bike";


export default function Disponibilidade({ idBike }) {
    const [status, setStatus] = useState("")


    useEffect(() => {
        function relatorio() {
            fetch(bikeEndpoint + `/detalhe?id=${idBike}`)
                .then(r => r.json())
                .then(({ status }) => {
                    setStatus(status)
                })
        }
        relatorio();
    }, [])


    async function updateBikeStatus(status: string) {
        const ok = prompt("Confirma a mudança de status da bike?")
        if (ok) {
            let data = { id: idBike, status: status }
            const statusUpdated = await fetch(bikeEndpoint + "/status", {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            statusUpdated.status === 201 ? setStatus(status)
                : alert("Erro ao editar status de bicicleta!")
        }

    }

    return (
        <>
            <select value={status} defaultValue={status} onChange={(e) => updateBikeStatus(e.target.value)}>

                <option value={"Disponivel"}>Disponivel</option>
                <option value={"Alugada"}>Alugada</option>
                <option value={"Pendente"}>Pendente</option>
            </select>

        </>
    )


}


