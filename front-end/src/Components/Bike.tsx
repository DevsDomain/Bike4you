import { useEffect, useState } from "react";
import { BikeProps, BrandProps, CategoryProps, UserProps } from "../types";
import "../App.css";
import Brand from "./Brand";
import Category from "./Category";
import service from "../services/BikeService";
import brandService from "../services/BrandService";
import categoryService from "../services/CategoryService";
import userService from "../services/UserService";

export default function Bike() {
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
  const [idbrand, setIdbrand] = useState("");
  const [idcategory, setIdcategory] = useState("");
  const [iduser, setIduser] = useState("");
  const [bikes, setBikes] = useState([] as BikeProps[]);
  const [brands, setBrands] = useState([] as BrandProps[]);
  const [categories, setCategories] = useState([] as CategoryProps[]);
  const [users, setUsers] = useState([] as UserProps[]);

  useEffect(() => {
    (async () => {
      load();
      loadBrands();
      loadCategories();
      loadUsers();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async () => {
    const res: BikeProps[] = await service.get();
    setBikes(res);
  };

  const loadBrands = async () => {
    const res: BrandProps[] = await brandService.get();
    setBrands(res);
  };

  const loadCategories = async () => {
    const res: CategoryProps[] = await categoryService.get();
    setCategories(res);
  };

  const loadUsers = async () => {
    const res: UserProps[] = await userService.get();
    setUsers(res);
  };

  const save = async (e: any) => {
    //evita o evento natural que é o submit do formulário
    e.preventDefault();
    if (
      color &&
      color.trim() !== "" &&
      size &&
      size.trim() !== "" &&
      material &&
      material.trim() !== "" &&
      gender &&
      gender.trim() !== "" &&
      speedkit &&
      speedkit.trim() !== "" &&
      rim &&
      rim.trim() !== "" &&
      description &&
      description.trim() !== "" &&
      hourlyvalue &&
      hourlyvalue.trim() !== "" &&
      dailyvalue &&
      dailyvalue.trim() !== "" &&
      idbrand &&
      idbrand.trim() !== "" &&
      idcategory &&
      idcategory.trim() !== "" &&
      iduser &&
      iduser.trim() !== ""
    ) {
      const res: any = await service.post({
        color: color.trim(),
        size: size.trim(),
        material,
        gender,
        speedkit: speedkit.trim(),
        rim: rim.trim(),
        suspension,
        description: description.trim(),
        hourlyvalue: hourlyvalue.trim(),
        dailyvalue: dailyvalue.trim(),
        latitude: latitude.trim(),
        longitude: longitude.trim(),
        idbrand,
        idcategory,
        iduser,
      });
      if (res.error) {
        alert(res.error);
      } else {
        load();
      }
    }
  };

  const reset = (e: any) => {
    e.preventDefault();
    setColor("");
    setSize("");
    setSpeedkit("");
    setRim("");
    setDescription("");
    setHourlyvalue("");
    setDailyvalue("");
    setLatitude("");
    setLongitude("");
    setIdbrand("");
    setIdcategory("");
    setIduser("");

  };

 /* async function SalvarBike() {
    axios
      .post("http://localhost:3026/bike", {
        color,
        size,
        material,
        gender,
        suspension,
        rim,
        speedkit,
        description,
        hourlyvalue,
        dailyvalue,
        latitude,
        longitude,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
*/
  return (
    <>
      <div className="d-flex">
        <div className="container">
          <h1>Cadastro de Bicicletas</h1>
          {Brand()}
          {Category()}
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
            <div>
              <label>Marca</label>
              <select
                value={idbrand}
                onChange={(e) => setIdbrand(e.target.value)}
              >
                {brands.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Categoria</label>
              <select
                value={idcategory}
                onChange={(e) => setIdcategory(e.target.value)}
              >
                {categories.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
          <label>Usuário</label>
          <select value={iduser} onChange={(e) => setIduser(e.target.value)}>
            {
              users.map( item =>  <option value={item.id} key={item.id}>{item.alias}</option>)
            }
          </select>
        </div>
            <div>
              <button onClick={save}>Salvar</button>
              <button onClick={reset}>Limpar</button>
            </div>
          </form>

        </div>
      </div>
      <div className="d-flex">
      <table className="container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cor</th>
            <th>Tamanho</th>
            <th>Material</th>
            <th>Gênero</th>
            <th>Transmissão</th>
            <th>Aro</th>
            <th>Suspensão</th>
            <th>Descrição</th>
            <th>Hora</th>
            <th>Diária</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Proprietário</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Fotos</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.color}</td>
              <td>{item.size}</td>
              <td>{item.material}</td>
              <td>{item.gender}</td>
              <td>{item.speedkit}</td>
              <td>{item.rim}</td>
              <td>{item.suspension ? "sim" : "não"}</td>
              <td>{item.description}</td>
              <td>{item.hourlyvalue}</td>
              <td>{item.dailyvalue}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{item.user?.alias}</td>
              <td>{item.brand?.name}</td>
              <td>{item.category?.name}</td>
              <td>
                {item.photos?.map((item) => (
                  <a
                    href={`http://localhost:3026/foto/public/${item.filename}`}
                    key={item.id}
                    target="blank"
                  >
                    Foto
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

