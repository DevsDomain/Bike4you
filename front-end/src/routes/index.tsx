import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';
import Navbar from '../components/Navbar/Navbar';



export function Routes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            <Navbar />

            {user ? <AppRoutes /> : <AuthRoutes />}

            
        </BrowserRouter >
    )
}