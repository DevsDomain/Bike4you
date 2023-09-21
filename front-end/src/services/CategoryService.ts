import { CategoryProps } from "../types";
import api from "./api";

class CategoryService {
  async get(): Promise<CategoryProps[]> {
    const { data } = await api.get("/categoria");
    return data;
  }

  async post(name:string): Promise<any> {
    const { data } = await api.post("/categoria", {name});
    return data;
  }
}

const service = new CategoryService();
export default service;
