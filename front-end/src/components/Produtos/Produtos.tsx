import "./Produtos.css";
import CardBike from "../card/cards";

const Produtos = ({ result }) => {
  return (
    <section className="card-container">
      {result}
      <CardBike take={20} />
    </section>
  );
};

export default Produtos;
