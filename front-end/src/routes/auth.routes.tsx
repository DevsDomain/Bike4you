import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

export function AuthRoutes() {
    return (

        <Routes>
         
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signin" element={<SignIn />} />
            
        </Routes>
    

    )
}