import { Routes, Route } from "react-router-dom";
import Cadastro from "../components/Cadastro";
import Home from "../pages/Home";
import NotFound from "../pages/404";

export function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciamento" element={<Cadastro />} />
        <Route path="*" element={<NotFound/>}/>

        </Routes>
    )
}

