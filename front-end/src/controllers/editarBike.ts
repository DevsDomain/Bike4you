import { api } from "../service/api";

export default async function EditarBike(id: string | number, idbrand: number | undefined, idcategory: number | undefined, description: string, image: File | null, dailyvalue: string, hourlyvalue: string): Promise<Response | number> {
    try {
        console.log(id,"ID BIKE")
        const bike = await api.put("/bike", { id, idcategory, idbrand, description, hourlyvalue, dailyvalue });
        if (bike.data.error) {
            alert(bike.data.error);
            return 401;
        } else {
            if (image) {
                console.log("ALTEROU A IMAGEM")
                const idbike = bike.data
                const formData = new FormData();
                formData.append("idbike", idbike);
                formData.append("file", image || '')
                await api.post("/foto", formData);
                return 201;
            }
            else {
                return 201;
            }
        }
    } catch (error) {

        console.log(error);
        return 401;
    }



}
