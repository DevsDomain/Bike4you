import "./Disponibilidade.css";

export default function Disponibilidade(){
return(
    <div>
         <h2 className="sidebar-title disponibilidade-title">Disponibilidade</h2>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checmark"></span>Todos
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checmark"></span>Disponivél
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checmark"></span>Indisponível
        </label>
    </div>
)
}