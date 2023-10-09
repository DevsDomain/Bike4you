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
                mail: rest.mail || null, password: rest.password || null,
                phone: rest.phone || null
            })
        })
        return editUser.json()
    }
    catch (error) {
        console.log("Erro ao editar usuário!:", error)
        return 401
    }

}