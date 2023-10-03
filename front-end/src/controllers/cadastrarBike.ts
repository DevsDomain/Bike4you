import { api } from "../service/api";

export default async function CadastrarBike(idbrand: number | undefined, idcategory: number | undefined, description: string, image: File | null, dailyvalue: string, hourlyvalue: string, iduser: string): Promise<Response | number> {
    try {
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
