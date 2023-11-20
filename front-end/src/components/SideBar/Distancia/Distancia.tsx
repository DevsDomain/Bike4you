import "./Distancia.css";

export default function Distancia(){
return(
    <div>
        <h2 className="sidebar-title distancia-title">Distância</h2>
         <label className="sidebar-label-container marca-title">
          <input type="radio" name="test4" />
          <span className="checmark"></span>0 - 25km
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test4" />
          <span className="checmark"></span>26km - 50km
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test4" />
          <span className="checmark"></span>51km - 100km
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test4" />
          <span className="checmark"></span>101km - 150km
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test4" />
          <span className="checmark"></span>Mais de 150km
        </label>
    </div>
)
}