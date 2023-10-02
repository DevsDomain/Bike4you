import { api } from "../service/api";

export interface Category {
    id: number,
    name: string
}
export default async function BuscarCategoria(): Promise<Category[]> {
    return (await api.get('/categoria')).data


}