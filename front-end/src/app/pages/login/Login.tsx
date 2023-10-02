
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const Navigate = useNavigate();

    const handleclick = () => {
        Navigate('/pagina-inicial')
    }

    return (
        <div>
            Login
            <button onClick={handleclick}>Página inicial</button>
        </div>
    );
}

