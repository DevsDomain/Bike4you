import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Rent } from '../entities/Rent';
import { User } from "../entities/User";

class RentController {
    public async clientValuate(req: Request, res: Response): Promise<Response> {
        try {
            const { id, clientvaluation } = req.body;

            const rent = await AppDataSource.manager.update(Rent, id, {
                clientvaluation
            });
            return res.status(201).json(rent)
        } catch (error) {
            return res.status(401)
        }
    }



    public async ownerValuate(req: Request, res: Response): Promise<Response> {
        const { idowner, idClient, ownervaluation, bike } = req.body
        let [owner, client] = [idowner, idClient]


        // PEGAR A DATA ATUAL
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const date = `${year}-${month}-${day}`

        try {
            const rent = await AppDataSource.manager.save(Rent, {
                owner,
                client,
                bike,
                date,
                ownervaluation,


            })
            return res.status(201).json(rent)


        }
        catch (error) {
            return res.status(401).json(error)
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id, idclient, idowner, date, ownervaluation } = req.body;

        //obtém o usuário na tabela users
        const owner = await AppDataSource.manager.findOneBy(User, { id: idowner });
        if (!owner) {
            return res.status(400).json({ error: "Proprietário desconhecido", props: "owner" });
        }

        //obtém o usuário na tabela users
        const client = await AppDataSource.manager.findOneBy(User, { id: idclient });
        if (!client) {
            return res.status(400).json({ error: "Cliente desconhecido", props: "client" });
        }

        const rent = await AppDataSource.manager.save(Rent, { id, owner, client, date, ownervaluation });
        return res.json(rent);
    }

    public async list(_: Request, res: Response): Promise<Response> {
        const rents = await AppDataSource.manager.find(Rent, {
            relations: {
                client: true,
                owner: true
            },
            order: {
                date: "DESC"
            }
        });
        return res.json(rents);
    }

    public async listarContratos(req: Request, res: Response): Promise<Response> {
        const { client } = req.body
        try {
            const rent = await AppDataSource.manager.find(Rent, {
                relations: {
                    client: true,
                    owner: true,
                    bike: true,
                },
                where: {
                    client: {
                        id: client
                    }
                },
                order: {
                    date: "DESC"
                }
            })

            return res.json(rent)
        } catch (error) {
            res.json(error)
        }


    }


    public async rating(req: Request, res: Response): Promise<Response> {
        const idBike = Number(req.query.idBike)
        try {

            const query = await AppDataSource.manager.find(Rent, {
                relations: {
                    bike: true,
                    client: true,
                },
                where: {
                    bike: {
                        id: idBike
                    }
                }
            })

            const valutations: number[] = []

            query.map((rate) => {
                valutations.push(Number(rate.clientvaluation))
            })

            const rating = valutations.reduce((total, val) => total + val, 0) / valutations.length || 0



            return res.status(201).json({ "bikeRate": Number(rating.toFixed(2)) })

        } catch (error) {
            return res.status(401).json({ message: "Erro ao buscar avaliações" })
        }


    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        // o método delete retorna o objeto {"raw": [],"affected": 1}
        // a propriedade affected terá valor 0 se não tiver sido excluído o registro
        const { affected } = await AppDataSource.manager.delete(Rent, { id });
        return res.json({ affected });
    }

}

export default new RentController();