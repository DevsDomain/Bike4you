import { Router, Request, Response } from "express";
import controller from "../controllers/BikeController";

const routes = Router();

routes.post('/', controller.create);
routes.get('/', controller.list);
routes.get('/detalhe', controller.detalhe);
routes.delete('/', controller.delete);
routes.put('/', controller.update);
routes.get('/geral', controller.geral);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;