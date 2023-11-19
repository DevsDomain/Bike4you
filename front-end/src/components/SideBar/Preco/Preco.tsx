import "./Preco.css";

export default function Preco(){
return(
    <div className="ml">
        <h2 className="sidebar-title price-title">Preço</h2>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checmark"></span>Todas
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checmark"></span>R$0-R$50
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checmark"></span>R$51-R$100
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checmark"></span>R$101-R$150
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checmark"></span>Mais de R$151
        </label>
        </div>
)
}