import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer >
            <div >
                <div >
                    <img src="logo.png" alt="Logo" />
                </div>
                <div >
                    <ul>
                        <Link to="/"></Link>
                        <Link to="/bikes"></Link>
                        <Link to="/gerenciamento"></Link>
                        <Link to="/login"></Link>
                    </ul>
                </div>
                <div>
                    <p>Entre em contato:</p>
                    <p>Email: Bikes4You@gmail.com</p>
                    <p>Telefone: (12) 99124-7890</p>
                </div>
            </div>
            <div >
                &copy; Todos os direitos reservados.
            </div>
        </footer>
    )
}
export default Footer