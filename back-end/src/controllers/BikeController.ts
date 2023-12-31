import AppDataSource from "../data-source";
import { Request, Response, json } from 'express';
import { User } from '../entities/User';
import { Bike } from '../entities/Bike';
import { Brand } from "../entities/Brand";
import { Category } from "../entities/Category";

class BikeController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { iduser, idcategory, idbrand, description, hourlyvalue, dailyvalue } = req.body;

        //obtém o usuário na tabela users
        const user = await AppDataSource.manager.findOneBy(User, { id: iduser });
        if (!user) {
            return res.status(400).json({ error: "Usuário desconhecido", props: "user" });
        }

        //obtém a marca na tabela brands
        const brand = await AppDataSource.manager.findOneBy(Brand, { id: idbrand });
        if (!brand) {
            return res.status(400).json({ error: "Marca desconhecida", props: "brand" });
        }

        //obtém a categoria na tabela categories
        const category = await AppDataSource.manager.findOneBy(Category, { id: idcategory });
        if (!category) {
            return res.status(400).json({ error: "Categoria desconhecida", props: "category" });
        }


        const bike = await AppDataSource.manager.save(Bike, {
            brand,
            category,
            description,
            hourlyvalue,
            dailyvalue,
            user
        });
        return res.json(bike.id)
    }

    public async updateStatus(req: Request, res: Response): Promise<Response> {
        try {
            console.log("BATEU")
            let { id, status } = req.body;
            console.log(status)

            const bike = await AppDataSource.manager.update(Bike, id, { status: status });
            const updated = await AppDataSource.manager.findOneBy(Bike, id);

            return res.status(201).json({ message: updated.status });
        } catch (error) { console.log("ERRO AO EDITAR BIKE"), res.status(401).json({ message: "ERRO AO EDITAR" }) }

    }
    public async update(req: Request, res: Response): Promise<Response> {
        try {

            console.log("BATEU")
            let { id, idcategory, idbrand, description, hourlyvalue, dailyvalue, status } = req.body;
            const bikeOld = await AppDataSource.manager.findOneBy(Bike, id);

            idcategory = idcategory ? idcategory : bikeOld.category.id
            idbrand = idbrand ? idbrand : bikeOld.brand.id
            description = description ? description : bikeOld.description;
            hourlyvalue = hourlyvalue ? hourlyvalue : bikeOld.hourlyvalue;
            dailyvalue = dailyvalue ? dailyvalue : bikeOld.dailyvalue;
            status = status ? status : bikeOld.status;


            //obtém a marca na tabela brands
            const brand = await AppDataSource.manager.findOneBy(Brand, { id: idbrand });
            if (!brand) {
                return res.status(400).json({ error: "Marca desconhecida", props: "brand" });
            }
            console.log("BRAND", brand)

            //obtém a categoria na tabela categories
            const category = await AppDataSource.manager.findOneBy(Category, { id: idcategory });
            if (!category) {
                return res.status(400).json({ error: "Categoria desconhecida", props: "category" });
            }
            console.log("CATEGORY", category)

            const bike = await AppDataSource.manager.update(Bike, id, { brand, category, description, hourlyvalue, dailyvalue, status });
            return res.json(bike);
        } catch (error) { console.log("ERRO AO EDITAR BIKE"), res.status(401).json({ message: "ERRO AO EDITAR" }) }

    }

    public async list(req: Request, res: Response): Promise<Response> {
        const cards = Number(req.query.cards)
        const bikes = await AppDataSource.manager.find(Bike, {

            relations: {
                user: true,
                brand: true,
                category: true,
                photos: true
            },
            order: {
                'id': 'desc'
            },
            take: Number(cards)
        });
        return res.json(bikes);
    }
    public async detalhe(req: Request, res: Response): Promise<Response> {
        console.log("ID ANTES DE CONVERTER PARA NUMBER NO DETALHE",req.query.id  )
        const id = Number(req.query.id);
        console.log("ID NA FUNÇÃO DETALHE:", id);
        const bikes = await AppDataSource.manager.findOne(Bike, {

            relations: {
                user: true,
                brand: true,
                category: true,
                photos: true
            },
            where: {
                id: id
            }

        });
        return res.json(bikes);
    }


    public async geral(req: Request, res: Response): Promise<Response> {

        const idUser = Number(req.query.idUser)
        console.log("idUser na função GERAL:", idUser)


        try {
            const user = await AppDataSource.manager.findOne(User, { where: { id: idUser } })
            if (!user) { return res.status(404).json({ message: "Usuário não encontrado!" }) }

            const relatorio = await AppDataSource.manager.find(Bike, {
                relations: {
                    user: true,
                    rents: true,
                },
                where: {
                    user: user
                }

            })

            if (!relatorio || relatorio.length === 0) {
                return res.status(404).json({ message: "Nenhuma bike encontrada!" })
            }
            const bikes = relatorio.map((bike) => {
                const rents = bike.rents.map(rent => Number(rent.clientvaluation))
                const averageValuation = rents.reduce((total, val) => total + val, 0) / rents.length || 0

                return {
                    cod_bike: bike.id,
                    description: bike.description,
                    status: bike.status,
                    media: Number(averageValuation.toFixed(2))
                }
            })

            res.status(201).json(bikes)

        } catch (error) {
            console.log("ERRO CATCH")
        }




    }
    public async modal(req: Request, res: Response): Promise<Response> {
        const idBike = Number(req.query.idBike)
        console.log(idBike)
        try {
            const query = await AppDataSource.manager.findOne(Bike, {
                relations: {
                    user: true

                },
                where: {
                    id: idBike
                }
            })
            const owner = { nome: query.user.userName, email: query.user.mail, phone: query.user.phone }
            return res.status(201).json(owner)
        } catch (error) { return res.status(401).json({ message: "ERROR MODAL CATCH" }) }


    }


    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        // o método delete retorna o objeto {"raw": [],"affected": 1}
        // a propriedade affected terá valor 0 se não tiver sido excluído o registro
        const { affected } = await AppDataSource.manager.delete(Bike, { id });
        return res.json({ affected });
    }

}

export default new BikeController();