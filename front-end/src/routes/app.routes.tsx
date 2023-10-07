import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

export function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />


        </Routes>
    )
}

