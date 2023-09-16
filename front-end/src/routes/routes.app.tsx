import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import Cadastro from "../pages/Cadastro";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cadastro" element={<Cadastro />} />


        </Routes>
    )
}

