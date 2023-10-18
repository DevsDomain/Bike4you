import { userEndpoint } from "../service/user"

export default async function editarUsuario({ id, ...rest }): Promise<Response | number> {
    try {

        const editUser = await fetch(userEndpoint, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id, userName: rest.userName || null,
                mail: rest.mail || null,
                password: rest.password || null,
                phone: rest.phone || null,
                cep: rest.cep || null,
                numero_residencial: rest.numero_residencial || null

            })
        })
        if (editUser.status === 201) {
            alert("Usuário editado com sucesso!")
        }
        else {
            alert("Erro ao editar usuário")

        }
        return editUser.json()
    }
    catch (error) {
        console.log("Erro ao editar usuário!:", error)
        return 401
    }

}