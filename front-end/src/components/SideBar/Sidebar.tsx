import Categoria from "../SideBar/Categoria/Categoria";
import Marca from "../SideBar/Marca/Marca";
import Preco from "../SideBar/Preco/Preco";
import Disponibilidade from "../SideBar/Disponibilidade/Disponibilidade";
import "./Sidebar.css";
import { BiCycling } from "react-icons/bi";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <BiCycling />
          </h1>
        </div>

        <Categoria handleChange={handleChange} />
        <Marca handleChange={handleChange} />      
        <Disponibilidade handleChange={handleChange} />        
        <Preco handleChange={handleChange} />        
      </section>
    </>
  );
}

export default Sidebar;