import "./Produtos.css";
import CardBike from "../card/cards";

const Produtos = ({ result }) => {
  return (
    <section className="card-container">
      {result}      
    </section>
  );
};

export default Produtos;
