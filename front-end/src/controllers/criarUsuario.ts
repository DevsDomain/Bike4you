import { api } from "../service/api";

export default async function CriarUsuario(userName: string, mail: string, password: string, phone: string = '99999999999'): Promise<Response | number> {
    try {
        if (userName !== '' && mail !== '' && password !== '') {
            const response = await api.post("/usuario", { userName, mail, password, phone });

            if (response.data.error) {
                alert(response.data.error);
                return 401;
            } else {
                return response.status;
            }
        } else {
            return 401;
        }
    } catch (error) {
        
        console.log(error);
        return 401;
    }
}
