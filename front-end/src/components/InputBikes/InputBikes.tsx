const InputBikes = ({ handleChange, value, title, name, }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: name }}></span>
        {title}
      </label>
    );
  };
  
  export default InputBikes;
  