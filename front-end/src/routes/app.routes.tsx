import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Gerenciamento from "../pages/Gerenciamento";


export function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Gerenciamento" element={<Gerenciamento />} />

        </Routes>
    )
}

