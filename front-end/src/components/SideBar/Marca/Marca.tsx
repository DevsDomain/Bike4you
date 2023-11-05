import "./Marca.css";

export default function Marca(){
return(
    <div>
        <h2 className="sidebar-title price-title">Marca</h2>
         <label className="sidebar-label-container marca-title">
          <input type="radio" name="test2" />
          <span className="checmark"></span>Todas
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checmark"></span>Caloi
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checmark"></span>Sense
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checmark"></span>Oggi
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checmark"></span>SoulCycles
        </label>
    </div>
)
}