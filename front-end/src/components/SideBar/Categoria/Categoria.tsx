import "./Categoria.css";

export default function Categoria() {
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checmark"></span>Todas
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checmark"></span>Estrada
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checmark"></span>Infantil
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checmark"></span>Lazer
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checmark"></span>MountainBike
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checmark"></span>Urbana
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checmark"></span>Speed
        </label>
      </div>
    </div>
  );
}