import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Tela_usuario from "../pages/Tela_usuario";

export function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Cadastro />} />
            <Route path="/Tela_usuario" element={<Tela_usuario />} />

        </Routes>
    )
}

