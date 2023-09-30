import { api } from "../service/api";

export default async function CadastrarBike(category: string, brand:string, description: string, dailyvalue: string, hourlyvalue:string, iduser: string): Promise<Response | number> {
    try {

        const response = await api.post("/bike", { category, brand, description, dailyvalue, hourlyvalue, iduser });
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
