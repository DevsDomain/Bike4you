import { api } from "../service/api";

export interface Brand {
    id: number,
    name: string
}
export default async function buscarMarcas(): Promise<Array<Brand>> {
    const marcas = await api.get("/marca")
    return marcas.data
}