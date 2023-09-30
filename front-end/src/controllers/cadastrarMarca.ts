import { api } from "../service/api"


export default async function CadastrarMarca(brand: string | number) {
    let idbrand: string | number

    if (typeof (brand) === 'string') {
        try {
            let idbrand = (await api.post("/marca", { name: brand })).data.id
            return idbrand


        }
        catch (error: any) {
            console.log("Problema ao cadastrar nova marca", error)
            return 401
        }
    }

    else {
        idbrand = brand
        return idbrand
    }


}
