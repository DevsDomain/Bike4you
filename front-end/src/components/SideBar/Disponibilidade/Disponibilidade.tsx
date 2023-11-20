import InputBikes from "../../InputBikes/InputBikes";
import "./Disponibilidade.css";

const Disponibilidade= ({ handleChange }) => {
  return (
    <div >
      <h2 className="sidebar-title disponibilidade-title">Disponibilidade</h2>
      
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span>Todas
        </label>

        <InputBikes
          handleChange={handleChange}
          value="Disponivel"
          title="Disponivel"
          name="test1"
        />
         <InputBikes
          handleChange={handleChange}
          value="Alugada"
          title="Alugada"
          name="test1"
        />
    </div>
  );
}

export default Disponibilidade;