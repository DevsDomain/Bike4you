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
          <ButtonBikes onClickHandler={handleClick} value="Athor" title="Athor" />
          <ButtonBikes onClickHandler={handleClick} value="Rino" title="Rino" />
          <ButtonBikes onClickHandler={handleClick} value="Track & Bikes" title="Track & Bikes" />
          <ButtonBikes onClickHandler={handleClick} value="TSW" title="TSW" />
          <ButtonBikes onClickHandler={handleClick} value="Shimano" title="Shimano" />
          <ButtonBikes onClickHandler={handleClick} value="Sense" title="Sense" />
        </div>
      </div>
    </>
  );
};
export default Recommendado;
