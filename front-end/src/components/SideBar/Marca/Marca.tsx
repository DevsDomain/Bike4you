import InputBikes from "../../InputBikes/InputBikes";
import "./Marca.css";

export default function Marca({ handleChange }) {
  return (
    <div >
      <h2 className="sidebar-title marca-title">Marca</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>Todas
      </label>

      <InputBikes
        handleChange={handleChange}
        value="Caloi"
        title="Caloi"
        name="test2"
      />
      <InputBikes
        handleChange={handleChange}
        value="Sense"
        title="Sense"
        name="test2"
      />
      <InputBikes
        handleChange={handleChange}
        value="Rino"
        title="Rino"
        name="test2"
      />
      <InputBikes
        handleChange={handleChange}
        value="Shimano"
        title="Shimano"
        name="test2"
      />
    </div>
  );
}
