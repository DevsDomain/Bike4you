import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src="" alt="Logo" />
        </div>
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
          <p>Entre em contato:</p>
          <p>Email: Bikes4You@gmail.com</p>
          <p>Telefone: (12) 99124-7890</p>
        </div>
      </div>
      <div>&copy; Todos os direitos reservados.</div>
    </footer>
  );
}

export default Footer;