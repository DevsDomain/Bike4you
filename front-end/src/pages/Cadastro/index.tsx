import { useEffect, useState } from 'react';

import CadastrarBike from '../../controllers/cadastrarBike';


export default function Cadastro() {


    const [idUsuario, setidUsuario] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [material, setMaterial] = useState("");
    const [gender, setGender] = useState("");
    const [suspension, setSuspension] = useState("");
    const [rim, setRim] = useState("");
    const [speedkit, setSpeedkit] = useState("");
    const [description, setDescription] = useState("");
    const [hourlyvalue, setHourlyvalue] = useState("");
    const [dailyvalue, setDailyvalue] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
   



    useEffect(() => {
        setidUsuario(JSON.parse(localStorage.getItem('idUsuario') || ''));
        if (idUsuario) {
            setidUsuario(idUsuario);
        }
    }, [idUsuario]);

    async function Cadastrando() {
        await CadastrarBike(color, size, material, description, dailyvalue , idUsuario)

    }



    return (
            <form>
            <div>
              <label>Cor</label>
              <input value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <div>
              <label>Tamanho</label>
              <input value={size} onChange={(e) => setSize(e.target.value)} />
            </div>
            <div>
              <label>Material</label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                <option value="alumínio" defaultChecked>
                  Alumínio
                </option>
                <option value="carbono">Carbono</option>
                <option value="ferro">Ferro</option>
              </select>
            </div>
            <div>
              <label>Gênero</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="unissex" defaultChecked>
                  Unissex
                </option>
              </select>
            </div>
            <div>
              <label>Transmissão</label>
              <input
                value={speedkit}
                onChange={(e) => setSpeedkit(e.target.value)}
              />
            </div>
            <div>
              <label>Aro</label>
              <input value={rim} onChange={(e) => setRim(e.target.value)} />
            </div>
            <div>
              <label>Suspensão</label>
              <select
                value={suspension}
                onChange={(e) => setSuspension(e.target.value)}
              >
                <option value="true" defaultChecked>
                  Sim
                </option>
                <option value="false">Não</option>
              </select>
            </div>
            <div>
              <label>Descrição</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label>Hora</label>
              <input
                value={hourlyvalue}
                onChange={(e) => setHourlyvalue(e.target.value)}
              />
            </div>
            <div>
              <label>Diária</label>
              <input

                value={dailyvalue}
                onChange={(e) => setDailyvalue(e.target.value)}
              />
            </div>
            <div>
              <label>Longitude</label>
              <input
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
            <div>
              <label>Latitude</label>
              <input
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <button onClick={()=>Cadastrando()}> Cadastrar </button>
        </form>


    );
}