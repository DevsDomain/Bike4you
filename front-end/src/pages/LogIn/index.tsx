import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'
import { useState } from "react";
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';


export default function LogIn() {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()



    function handleSignin() {
        navigate('/signin')
    }


    async function Logar() {
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

                navigate('/cadastro');


            }).catch((error: any) => {
                alert(error.response.data.message)

            })

        }
        else {
            alert("Informe email e senha")
        }

    }
    return (
        <Container>
            <Form>
                <h1>Bikes4You</h1>
                <p>Aplicação para aluguel de Bikes</p>

                <h2>Login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setMail(e.target.value)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}

                />
                <Button title="Login" onClick={Logar} loading={loading} />
                <ButtonText title="Cadastrar" isactive="true" onClick={handleSignin} />

            </Form>
            <Background />

        </Container>
    )
}