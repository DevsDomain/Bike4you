import { Routes, Route } from "react-router-dom";
import Usuario from "../pages/Usuario";
import Gerenciar from "../pages/gerenciar";
import Home from "../pages/Home";
import NotFound from "../pages/404";


export function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciamento" element={<Usuario />} />
        <Route path="/gerenciar" element={<Gerenciar />} />
        <Route path="*" element={<NotFound/>}/>

        </Routes>
    )
}

