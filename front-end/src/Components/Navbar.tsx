import './Navbar.css';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdDirectionsBike, MdOutlineCategory} from 'react-icons/md';
import {GoHome} from 'react-icons/go';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

//function Navbar(){
  return (
    <nav className="navbar">
      <ul className='list'>
        <li className='item'> <a href="/login"> <BsFillPersonFill /> Login</a></li>
        <li className='item'><a href="/"> <GoHome /> Home</a></li>
        <li className='item dropdown '>
          <a className='nav-link dropdown-togle' href="/categoria"  onClick={toggleDropdown}> <MdOutlineCategory /> Categoria</a>
          <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <li><a className="dropdown-item" href="/">MTB</a></li>
            <li><a className="dropdown-item" href="/">Speed</a></li>
            <li><a className="dropdown-item" href="/">Diversos</a></li>
          </ul>
          </li>
        <li className='item'><a href="/bikes"> <MdDirectionsBike /> Alugar</a></li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Pesquisar" />
        <button type="submit">Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;