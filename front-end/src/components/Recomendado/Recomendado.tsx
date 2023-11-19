import ButtonBikes from "../ButtonBikes/ButtonBikes";
import "./Recomendado.css";

const Recommendado = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recomendado-title">Recomendado</h2>
        <div className="recomendado-flex">
          <ButtonBikes onClickHandler={handleClick} value="" title="Todas Bikes" />
          <ButtonBikes onClickHandler={handleClick} value="Caloi" title="Caloi" />
          <ButtonBikes onClickHandler={handleClick} value="Oggi" title="Oggi" />
          <ButtonBikes onClickHandler={handleClick} value="Sense" title="Sense" />
          <ButtonBikes onClickHandler={handleClick} value="SoulCycles" title="SoulCycles" />
        </div>
      </div>
    </>
  );
};
export default Recommendado;
