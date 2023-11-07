import Categoria from "../SideBar/Categoria/Categoria";
import Preco from "../SideBar/Preco/Preco";
import Marca from "../SideBar/Marca/Marca";
import Disponibilidade from "../SideBar/Disponibilidade/Disponibilidade";
import Distancia from "../SideBar/Distancia/Distancia";
import "./Sidebar.css";
import { BiCycling } from "react-icons/bi";


export default function Sidebar(){
    return<>
    <section className="sidebar">
        <div className="logo-container">
            <h1><BiCycling/></h1>
        </div>

<Categoria/>
<Preco/>
<Marca/>
<Distancia/>
<Disponibilidade/>

    </section>
    
    </>
}