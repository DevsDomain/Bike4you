import { FiUser, FiMail, FiLock, FiPhone } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CriarUsuario from '../../controllers/criarUsuario';


export default function SignIn() {
    const [userName, setuserName] = useState("");
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()


    function handleNav() {
        navigate('/');
    }


    async function handleSignIn() {
        const res = await CriarUsuario(userName, mail, password, phone)
        if (res === 201) {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
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
                    onChange={e => setuserName(e.target.value)}
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
                <Button google={false} title="Criar Conta" onClick={handleSignIn} loading={false} />



                <ButtonText title="Login" isactive="true" onClick={handleNav} />


            </Form>
            <Background />

        </Container>
    )
}