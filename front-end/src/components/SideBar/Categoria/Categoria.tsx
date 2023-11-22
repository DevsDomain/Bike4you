import InputBikes from "../../InputBikes/InputBikes";
import "./Categoria.css";


export default function Categoria({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
      
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Todas
        </label>
        

        <InputBikes
          handleChange={handleChange}
          value="Urbano"
          title="Urbano"
          name="test"
        />
        <InputBikes
          handleChange={handleChange}
          value="Retro"
          title="Retro"
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
          value="Mountain Bike"
          title="Mountain Bike"
          name="test"
        />
         <InputBikes
          handleChange={handleChange}
          value="Race"
          title="Race"
          name="test"
        />
      </div>
    </div>
  );
}