import { ChangeEvent, useEffect, useState } from "react";
import { PhotoProps, BikeProps } from "../types";
import service from "../services/PhotoService";
import bikeService from "../services/BikeService";

export default function Photo() {
  const [idbike, setIdbike] = useState("7");
  const [file, setFile] = useState<File | null>(null);
  const [photos, setPhotos] = useState([] as PhotoProps[]);
  const [bikes, setBikes] = useState([] as BikeProps[]);

  //disparado ao carregar o componente
  useEffect(() => {
    (async () => {
      load();
      loadBikes();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async () => {
    const res: PhotoProps[] = await service.get();
    setPhotos(res);
  };

  const loadBikes = async () => {
    const res: BikeProps[] = await bikeService.get();
    setBikes(res);
  };

  const save = async (e: any) => {
    //evita o evento natural que é o submit do formulário
    e.preventDefault();
    if (idbike && file) {
      const res: any = await service.post({ idbike, file });
      if (res.error) {
        alert(res.error);
      } else {
        load();
      }
    }
  };

  const reset = (e: any) => {
    e.preventDefault();
    setIdbike("");
    setFile(null);
  };

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.files && event.target.files[0];

    if (input) {
      const allowedExtensions = ['.jpg', '.jpeg', '.png'];
      const fileExtension = input.name.split('.').pop()?.toLowerCase();

      if (allowedExtensions.indexOf(`.${fileExtension}`) === -1) {
        alert('Formato de arquivo não suportado. Use .jpg, .jpeg ou .png.');
      } else {
        setFile(input);
      }
    }
  };
  
  return (
    <>
    <div className="d-flex">
        <div className="container">
      <h3>Foto</h3>
      <form>
      <div>
          <label>Bicicleta</label>
          <select value={idbike} onChange={(e) => setIdbike(e.target.value)}>
            {
              bikes.map( item =>  <option value={item.id} key={item.id}>{item.description}</option>)
            }
          </select>
        </div>
        <div>
          <label>Foto</label>
          <input type="file" onChange={handleFile}  />
        </div>
        <div>
          <button onClick={save}>Salvar</button>
          <button onClick={reset}>Limpar</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Arquivo</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                  <a
                    href={`http://localhost:3026/foto/public/${item.filename}`}
                    key={item.id}
                    target="blank"
                  >
                    Foto
                  </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}
