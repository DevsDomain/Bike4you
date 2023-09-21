import { UserProps } from "../types";
import api from "./api";

class UserService {
  async get(): Promise<UserProps[]> {
    const { data } = await api.get("/usuario");
    return data;
  }

  async post(props:UserProps): Promise<any> {
    const { data } = await api.post("/usuario", props);
    return data;
  }
}

const service = new UserService();
export default service;
