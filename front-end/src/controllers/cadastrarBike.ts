import { api } from "../service/api";

export default async function CadastrarBike(category: string, brand: string, description: string, dailyvalue: string, hourlyvalue: string, iduser: string): Promise<Response | number> {
    try {

        const idbrand = (await api.post("/marca", { name: brand })).data.id
        if (!idbrand) {
            return 401
        }

        const idcategory = (await api.post("/categoria", { name: category })).data.id
        if (!idcategory) {
            return 401
        }

        const response = await api.post("/bike", { iduser, idcategory, idbrand, description, hourlyvalue, dailyvalue });
        if (response.data.error) {
            alert(response.data.error);
            return 401;
        } else {
            console.log(response.data)
            return response.status;

        }
    } catch (error) {

        console.log(error);
        return 401;
    }
}
