import { api } from "../service/api";

export default async function CadastrarBike(color: string, size: string,
    material: string, description: string, dailyvalue: number, iduser: number): Promise<Response | number> {
    try {

        const response = await api.post("/bike", { color, size, material, description, dailyvalue, iduser });
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
