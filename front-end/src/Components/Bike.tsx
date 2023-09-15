import axios from "axios";
import { useState } from "react";
import "../App.css";
import Brand from "./Brand";
import Category from "./Category";

function Bike() {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [gender, setGender] = useState("");
  const [suspension, setSuspension] = useState("");
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuspension(event.target.value);
  };
  const [rim, setRim] = useState("");
  const [speedkit, setSpeedkit] = useState("");
  const [description, setDescription] = useState("");
  const [hourlyvalue, setHourlyvalue] = useState("");
  const [dailyvalue, setDailyvalue] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  async function SalvarBike() {
    axios
      .post("http://localhost:3026/bike", {
        color,
        size,
        suspension,
        material,
        gender,
        rim,
        speedkit,
        description,
        hourlyvalue,
        dailyvalue,
        latitude,
        longitude,
      })
      .then(({ data }) => console.log(data));
  }

  return (
    <div className="d-flex">
      <div className="container">
        <h1>Cadastro de Bicicletas</h1>
        {Brand()}
        {Category()}
        <p>Cor</p>
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Informe a cor"
        />
        <p>Tamanho</p>
        <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Informe o tamanho"
        />
        <br />
        <fieldset>
          <legend>Tem suspenção?</legend>
          <p>
            <input
              type="radio"
              name="suspensão"
              value="Sim"
              id="sim"
              onChange={radioHandler}
            />
            <label htmlFor="sim">Sim</label>
          </p>
          <p>
            <input
              type="radio"
              name="suspensão"
              value="Não"
              id="não"
              onChange={radioHandler}
            />
            <label htmlFor="não">Não</label>
          </p>
        </fieldset>
        <p>Aro</p>
        <input
          value={rim}
          onChange={(e) => setRim(e.target.value)}
          placeholder="Informe o aro"
        />

        <p>Marchas</p>
        <input
          value={speedkit}
          onChange={(e) => setSpeedkit(e.target.value)}
          placeholder="Informe o speedkit"
        />

        <p>Descrição</p>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Informe a descrição"
        />

        <p>Valor por Hora</p>
        <input
          value={hourlyvalue}
          onChange={(e) => setHourlyvalue(e.target.value)}
          placeholder="Informe o valor por hora"
        />

        <p>Valor por Dia</p>
        <input
          value={dailyvalue}
          onChange={(e) => setDailyvalue(e.target.value)}
          placeholder="Informe o valor por dia"
        />

        <p>Latitude</p>
        <input
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Informe a latitude"
        />

        <p>Longitude</p>
        <input
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Informe a longitude"
        />

        <br />
        <button type="submit" onClick={SalvarBike}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Bike;
