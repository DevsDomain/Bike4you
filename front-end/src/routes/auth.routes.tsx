import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Unauthorized from "../pages/Unauthorized";
import BuscarBikes from "../pages/Buscar Bikes/BuscarBikes";

export function AuthRoutes() {
    return (

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/bikes" element={<BuscarBikes />} />
            <Route path="/gerenciamento" element={<Unauthorized />} />


            <Route path="*" element={<NotFound />} />

        </Routes>



    )
}