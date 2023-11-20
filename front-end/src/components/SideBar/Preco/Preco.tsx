import InputBikes from "../../InputBikes/InputBikes";
import "./Preco.css";

const Preco = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test6" />
          <span className="checkmark"></span>All
        </label>

        <InputBikes
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test6"
        />

        <InputBikes
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test6"
        />

        <InputBikes
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test6"
        />

        <InputBikes
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Preco;
