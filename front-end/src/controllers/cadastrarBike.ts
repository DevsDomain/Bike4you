import { api } from "../service/api";
import CadastrarMarca from "./cadastrarMarca";

export default async function CadastrarBike(brand: string | number, category: string | number, description: string, image: File | null, dailyvalue: string, hourlyvalue: string, iduser: string): Promise<Response | number> {
    try {

        const idbrand = await CadastrarMarca(brand)

        const idcategory = (await api.post("/categoria", { name: category })).data.id
        if (!idcategory) {
            return 401
        }

        const bike = await api.post("/bike", { iduser, idcategory, idbrand, description, hourlyvalue, dailyvalue });
        if (bike.data.error) {
            alert(bike.data.error);
            return 401;
        } else {
            const idbike = bike.data
            const formData = new FormData();
            formData.append("idbike", idbike);
            formData.append("file", image || '')
            await api.post("/foto", formData);

            return 201;

        }
    } catch (error) {

        console.log(error);
        return 401;
    }



}
