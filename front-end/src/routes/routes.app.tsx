import { Routes, Route } from "react-router-dom";

import LoginForm from "../pages/LoginForm";
import Cadastro from "../pages/Cadastro";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/cadastro" element={<Cadastro />} />

        </Routes>
    )
}

