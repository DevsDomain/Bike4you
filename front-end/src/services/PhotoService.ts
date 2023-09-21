import { PhotoProps } from "../types";
import api from "./api";

class PhotoService {
  async get(): Promise<PhotoProps[]> {
    const { data } = await api.get("/foto");
    return data;
  }

  async post(props: { idbike: string, file: any }): Promise<any> {
    const { data } = await api.post("/foto", props, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return data;
  }
}

const service = new PhotoService();
export default service;
