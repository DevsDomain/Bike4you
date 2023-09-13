import './Navbar.css';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdDirectionsBike, MdOutlineCategory} from 'react-icons/md';
import {GoHome} from 'react-icons/go';

function Navbar(){
  return (
    <nav className="navbar">
      <ul>
        <li> <a href="/login"> <BsFillPersonFill /> Login</a></li>
        <li><a href="/"> <GoHome /> Home</a></li>
        <li><a href="/categoria"> <MdOutlineCategory /> Categoria</a></li>
        <li><a href="/bikes"> <MdDirectionsBike /> Alugar</a></li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Pesquisar" />
        <button type="submit">Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;