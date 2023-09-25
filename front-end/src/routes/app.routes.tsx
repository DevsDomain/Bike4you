import { Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";

export function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Cadastro />} />


        </Routes>
    )
}

