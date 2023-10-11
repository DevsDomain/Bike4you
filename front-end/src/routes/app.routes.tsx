import { Routes, Route } from "react-router-dom";
import Usuario from "../pages/Usuario";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Cadastro from "../pages/Cadastro";


export function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciamento" element={<Usuario />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound/>}/>

        </Routes>
    )
}

