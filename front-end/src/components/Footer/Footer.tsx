import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from '../Footer/Footer.module.css';
 
export default function Footer() {
    return (
        <div>
            <footer>
                <div>
                    
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/bikes">Bikes</Link>
                            </li>
                            <li>
                                <Link to="/gerenciamento">Gerenciamento</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.social_list}>
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaLinkedin />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Entre em contato:</p>
                        <p>Email: Bikes4You@gmail.com</p>
                        <p>Telefone: (12) 99124-7890</p>
                    </div>
                </div>
                <div>&copy; Todos os direitos reservados.</div>
            </footer>
        </div>
    );
}