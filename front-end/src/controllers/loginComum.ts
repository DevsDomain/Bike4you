import { api } from "../service/api";


export default async function Logar(mail, password, setLoading) {
    if (mail !== "" && password !== "") {
        await api.get('/usuario', {
            params: {
                mail: mail,
                password: password,
            }
        }).then((res) => {
            setLoading(true)
            localStorage.setItem('idUsuario', (res.data.id));
            localStorage.setItem('alias', (res.data.alias));
            localStorage.setItem('mail', (res.data.mail));
            localStorage.setItem('phone', (res.data.phone));



        }).catch((error: any) => {
            alert(error.response.data.message)

        })

    }
    else {
        alert("Informe email e senha")
    }
}