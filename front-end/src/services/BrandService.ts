import { BrandProps } from "../types";
import api from "./api";

class BrandService {
  async get(): Promise<BrandProps[]> {
    const { data } = await api.get("/marca");
    return data;
  }

  async post(name:string): Promise<any> {
    const { data } = await api.post("/marca", {name});
    return data;
  }
}

const service = new BrandService();
export default service;
