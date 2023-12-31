import { Router, Request, Response } from "express";
import controller from "../controllers/RentController";

const routes = Router();

routes.post('/', controller.clientValuate);
routes.get('/', controller.list);
routes.delete('/', controller.delete);
routes.put('/', controller.update);
routes.get('/rate', controller.rating)
routes.post('/owner',controller.ownerValuate)
routes.post('/client',controller.listarContratos)


//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;