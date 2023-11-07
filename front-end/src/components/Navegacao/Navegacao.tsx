import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./Navegacao.css";

export default function Navegacao() {
    return (
      <nav>
        <div className="nav-container">
            <input 
            type="text"
            className="seach-input" 
            placeholder="Pesquise aqui sua Bike"
            />
        </div>

        <div className="profile-container">
            <a href="#">  
            <FiHeart className="nav-icons"/>
            </a>

            <a href="#">  
            <AiOutlineShoppingCart className="nav-icons"/>
            </a>
         
        </div>
      </nav>
    );
}