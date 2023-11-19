import { FiHeart } from "react-icons/fi";
import "./Navegacao.css";

const Navegacao = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="seach-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Pesquise aqui sua Bike"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navegacao;
