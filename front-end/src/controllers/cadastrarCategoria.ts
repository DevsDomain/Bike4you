import { api } from "../service/api";

export default async function CadastrarCategoria(categoria: string): Promise<number> {

    let idcategoria: number;

    try {
        idcategoria = (await api.post("/categoria", { name: categoria })).data.id
        return idcategoria
    } catch (error) {
        console.log(`Erro ao cadastrar nova categoria:${categoria}`, error);
        return 401
    }
}




