import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'


export function Routes() {
    const { user } = useAuth();

    return (
        <BrowserRouter>
            <Navbar />

            {user ? <AppRoutes /> : <AuthRoutes />}

            <Footer />
        </BrowserRouter >
    )
}