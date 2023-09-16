import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'
import { useState } from "react";
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {
    const [alias, setAlias] = useState("");
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()





    async function CriarUsuario(): Promise<String> {
        try {
            const res = await api.post("/usuario", { alias, mail, phone });
            alert("Usuário cadastrado com sucesso!");
            localStorage.setItem('idUsuario', (res.data.id));

            navigate("/Cadastro")
            return "Ok";
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message);
                return "Erro";
            } else {
                alert("Não foi possível cadastrar");
                return "Erro";
            }
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
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setMail(e.target.value)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPhone(e.target.value)}

                />
                <Button title="Criar Conta" onClick={CriarUsuario} loading={false} />



                <ButtonText title="Login" isactive="true" />


            </Form>
            <Background />

        </Container>
    )
}