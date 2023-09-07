import { Request, Response } from "express";
import { User } from "../entities/User"
import DataSource from "../data-source";

class UserController {

    async create(req: Request, res: Response) {
        const { mail, password } = req.body;
        const user = new User();
        user.mail = mail;
        user.password = password;
        const r = await DataSource.manager.save(User, user);
        res.json(r);

    }
}

export default new UserController();