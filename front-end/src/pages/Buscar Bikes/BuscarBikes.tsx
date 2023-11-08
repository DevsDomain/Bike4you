import Navegacao from "../../components/Navegacao/Navegacao";
import Produto from "../../components/Produtos/Produtos";
import Recomendado from "../../components/Recomendado/Recomendado";
import Sidebar from "../../components/SideBar/Sidebar";


export default function BuscarBikes() {
  return (
    <>
      <div>
        <Sidebar/>
        <Navegacao/>
        <Recomendado/>
        <Produto/>        
      </div>
    </>
  );
}