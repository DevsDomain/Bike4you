import { api } from "../service/api"



export default async function CadastrarMarca(brand: string): Promise<number> {
    let idbrand: number

    try {
        idbrand = (await api.post("/marca", { name: brand })).data.id
        return idbrand
    } catch (error) {

        console.log(`Problema ao cadastrar a marca: ${brand}`, error)
        return 401
    }


}
