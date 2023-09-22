import { FiUser, FiMail, FiLock, FiPhone } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'
import { useState } from "react";
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
    const [alias, setAlias] = useState("");
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()


    function handleNav() {
        navigate('/');
    }


    async function CriarUsuario() {
        if (alias !== '' && mail !== '' && phone !== '' && password !== '') {

            await api.post("/usuario", { alias, mail, password, phone }).then((res) => {
                if (res.data.error) {
                    alert(res.data.error)
                }
                else {
                    alert("Usuário cadastrado com sucesso!")
                    localStorage.setItem('idUsuario', (res.data.id));
                    localStorage.setItem('alias', (res.data.alias));
                    localStorage.setItem('mail', (res.data.mail));
                    localStorage.setItem('phone', (res.data.phone));

                    navigate('/cadastro');
                }

            }).catch((error: any) => {
                alert(error)

            })

        } else {
            alert("Preencha todos os campos")
        }


    }
    return (
        <Container>
            <Form>
                <h1>Bikes4You</h1>
                <p>Aplicação para aluguel de Bikes</p>

                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setAlias(e.target.value)}
                />
                <Input
                    placeholder="Phone-Number"
                    type="text"
                    icon={FiPhone}
                    onChange={e => setPhone(e.target.value)}
                />
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
                <Button title="Criar Conta" onClick={CriarUsuario} loading={false} />



                <ButtonText title="Login" isactive="true" onClick={handleNav} />


            </Form>
            <Background />

        </Container>
    )
}