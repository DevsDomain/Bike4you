import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from "./styles";
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { googleApi } from '../../service/googleApi';
import { useAuth } from '../../hooks/auth';
/* import Logar from '../../controllers/login';
import isAuthByGoogle from '../../controllers/googleLogin'; */

export default function LogIn() {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState('');
    const navigate = useNavigate()

const {Logar, isAuthByGoogle} = useAuth()


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse.access_token),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await googleApi.get(`=${user}`, {
                        headers: {
                            Authorization: `Bearer ${user}`,
                            Accept: 'application/json'
                        }
                    });

                    const { email, id, given_name } = response.data;
                    console.log(email,id)
                    const loggedIn = await isAuthByGoogle(email, id, given_name, setLoading)
                    if (loggedIn === 201) {
                        navigate('/')
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };

        fetchData();
    }, [user]);



    function handleSignin() {
        navigate('/signin')
    }

    async function handleLogin() {
        const loggedIn = await Logar(mail, password, setLoading)
        if (loggedIn === 201) {
            navigate('/')

        }
    }

    return (
        <Container>
            <Form>
                <h1>Bikes4You</h1>
                <p>Aplicação para aluguel de Bikes</p>

                <h2>Login</h2>

                <Button google={true} loading={false} title={"Entrar com Google"} onClick={login}></Button>



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
                <Button google={false} title="Login" onClick={handleLogin} loading={loading} />
                <ButtonText title="Cadastrar" isactive="true" onClick={handleSignin} />

            </Form>
            <Background />

        </Container>
    )
}