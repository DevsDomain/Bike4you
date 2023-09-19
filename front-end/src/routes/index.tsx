import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes.app';



export function Routes() {
    return (
        <BrowserRouter>
            <AppRoutes></AppRoutes>
        </BrowserRouter >
    )
}