import { Router, Request, Response } from "express";
import controller from "../controllers/UserController";

const routes = Router();

routes.post('/', controller.create);
routes.post('/logar',controller.login)
routes.post('/modal',controller.searchCliente)
routes.get('/', controller.findUser);
routes.delete('/', controller.delete);
routes.put('/', controller.update);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;