import { BikeProps } from "../types";
import api from "./api";

class BikeService {
  async get(): Promise<BikeProps[]> {
    const { data } = await api.get("/bike");
    return data;
  }

  async post(props:BikeProps): Promise<any> {
    const { data } = await api.post("/bike", props);
    return data;
  }
}

const service = new BikeService();
export default service;
