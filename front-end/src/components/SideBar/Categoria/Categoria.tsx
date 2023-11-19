import InputBikes from "../../InputBikes/InputBikes";
import "./Categoria.css";


export default function Categoria({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
        <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checmark"></span>Todas
        </label>

        <InputBikes
          handleChange={handleChange}
          value="Estrada"
          title="Estrada"
          name="test"
        />
        <InputBikes
          handleChange={handleChange}
          value="Infantil"
          title="Infantil"
          name="test"
        />
        <InputBikes
          handleChange={handleChange}
          value="Lazer"
          title="Lazer"
          name="test"
        />
        <InputBikes
          handleChange={handleChange}
          value="MountainBike"
          title="MountainBike"
          name="test"
        />
      </div>
    </div>
  );
}