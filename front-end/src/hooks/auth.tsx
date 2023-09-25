import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../service/api";
import CriarUsuario from "../controllers/criarUsuario";

interface AuthContextValue {
    user: string;
    Logar: (mail: string, password: string, setLoading: Function) => Promise<Response | number>;
    isAuthByGoogle: (mail: string, password: string, given_name: string, setLoading: Function) => Promise<number | void>,
    handleLogOut: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
    user: "",
    Logar: async (mail: string, password: string, setLoading: Function) => 201,
    isAuthByGoogle: async (mail: string, password: string, given_name: string, setLoading: Function) => 201,
    handleLogOut: () => ''
});


function AuthProvider({ children }) {


    const [user, setUser] = useState("")


    async function Logar(mail: string, password: string, setLoading: Function): Promise<Response | number> {
        try {
            if (mail !== "" && password !== "") {
                const response = await api.get('/usuario', {
                    params: {
                        mail: mail,
                        password: password,
                    }
                });
                setLoading(true);
                setUser(response.data.id)
                localStorage.setItem('idUsuario', response.data.id);
                localStorage.setItem('userName', response.data.userName);
                localStorage.setItem('mail', response.data.mail);
                api.defaults.headers.common['Authorization'] = `Bearer ${user}`


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


    async function isAuthByGoogle(mail: string, password: string, given_name: string, setLoading: Function) {

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

    function handleLogOut() {
        api.defaults.headers.common['Authorization'] = `Bearer ''}`
        localStorage.removeItem('idUsuario')
        localStorage.removeItem('userName')
        localStorage.removeItem('mail')
        setUser("")


    }

    useEffect(() => {
        const user = localStorage.getItem("idUsuario") || ""

        if (user) {
            api.defaults.headers.common['Authorization'] = `Bearer${user}`
        }
        setUser(user)

    }, [])


    return (
        <AuthContext.Provider value={{ Logar, isAuthByGoogle, handleLogOut, user }}>
            {children}
        </AuthContext.Provider>
    )

}


function useAuth() {
    const context = useContext(AuthContext)
    return context
}
export { AuthProvider, useAuth }