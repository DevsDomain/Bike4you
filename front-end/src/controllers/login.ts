import { api } from "../service/api";
import CriarUsuario from "./criarUsuario";


export default async function Logar(mail: string, password: string, setLoading: Function): Promise<Response | number> {
    try {
        if (mail !== "" && password !== "") {
            const response = await api.get('/usuario', {
                params: {
                    mail: mail,
                    password: password,
                }
            });

            setLoading(true);
            localStorage.setItem('idUsuario', response.data.id);
            localStorage.setItem('userName', response.data.userName);
            localStorage.setItem('mail', response.data.mail);

            return response.status;
        } else {
            alert("Preencha todos os campos!")
            return 401;
        }
    } catch (error: any) {
        alert(error.response.data.message);
        return 401;
    }
}


export async function isAuthByGoogle(mail: string, password: string, given_name: string, setLoading: Function) {

    const login = await Logar(mail, password, setLoading);

    if (login === 201) {
        return 201
    }
    else {
        const newUser = await CriarUsuario(given_name, mail, password)
        if (newUser === 201) {
            return 201
        }

    }

}