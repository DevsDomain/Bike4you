import { bikeEndpoint } from "../service/bike"

export default async function editarBike({ id, ...rest }): Promise<Response | number> {
    try {

        const editBike = await fetch(bikeEndpoint, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id, brandName: rest.brandName || null,
                category: rest.category || null,
                hourlyvalue: rest.dailyvalue || null,
                description: rest.description || null,
                image: rest.image || null

            })
        })
        if (editBike.status === 201) {
            alert("Bike editado com sucesso!")
        }
        else {
            alert("Erro ao editar bike")

        }
        return editBike.json()
    }
    catch (error) {
        console.log("Erro ao editar bike!:", error)
        return 401
    }

}