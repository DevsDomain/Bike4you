import AppDataSource from "../data-source";
import { Request, Response } from "express";
import { User } from "../entities/User";

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { mail, password } = req.body;
    const obj = new User();
    obj.mail = mail;
    obj.password = password;
    const user = await AppDataSource.manager.save(obj);
    return res.json(user);
  }

  public async list(_: Request, res: Response): Promise<Response> {
    const users = await AppDataSource.manager.find(User);
    return res.json(users);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body; // id do registro a ser excluído
    const user = await AppDataSource.manager.findOneBy(User, { id });
    if (user) {
      await AppDataSource.manager.delete(User, user);
      return res.json(user);
    }
    return res.json({ erro: `${id} inexistente` });
  }
  
  public async update(req: Request, res: Response): Promise<Response> {
    const { id, mail, password } = req.body;
    const user: User = await AppDataSource.manager.findOneBy(User, { id });
    if (user) {
      user.mail = mail;
      user.password = password;
      await AppDataSource.manager.save(user);
      return res.json(user);
    }
    return res.json({ erro: `${id} inexistente` });
  }
}

export default new UserController();
