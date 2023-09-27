import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { User } from '../entities/User';

class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { alias, mail, password, phone } = req.body;
            const user = await AppDataSource.manager.save(User, { alias, mail, password, phone }).catch(e => {
                if (/(alias)[\s\S]+(already exists)/.test(e.detail)) {
                    return { error: 'nome de usuário já existe' };


                }
                // Retorna apenas mensagem de erro para a variavel user
                else if (/(mail)[\s\S]+(already exists)/.test(e.detail)) {
                    return { error: 'E-mail já existe' };


                }
                // Retorna apenas mensagem de erro para a variavel user
                else if (/(phone)[\s\S]+(already exists)/.test(e.detail)) {
                    return { error: 'Telefone já existe' };
                }

                // Retorna mensagem de erro com response
                return res.status(401).json(user.error)

            })

            if (user.error) {
                return res.json(user)
            }
            else {
                return res.status(201).json({
                    id: user.id,
                    mail: user.mail,
                    phone: user.phone,
                    alias: user.alias
                })
            }

        } catch (error) {
            res.status(401).json("Erro ao cadastrar!")
        }

    }



    public async update(req: Request, res: Response): Promise<Response> {
        const { id, alias, mail, password, phone } = req.body;
        //obtém o usuário na tabela users
        const user = await AppDataSource.manager.findOneBy(User, { id });
        if (!user) { //verifica se o usuário existe
            return res.json({ error: "Usuário inexistente", props: "user" });
        }
        user.alias = alias;
        user.mail = mail;
        user.phone = phone;
        const r = await AppDataSource.manager.save(User, user).catch(e => {
            // testa se o alias é repetido
            if (/(alias)[\s\S]+(already exists)/.test(e.detail)) {
                return { error: 'Codinome já existe', props: "alias" };
            }

            else if (/(mail)[\s\S]+(already exists)/.test(e.detail)) {
                return { error: 'E-mail já existe', props: "mail" };
            }

            else if (/(phone)[\s\S]+(already exists)/.test(e.detail)) {
                return { error: 'Telefone já existe', props: "phone" };
            }
            return { error: e.message, props: "" };
        });
        return res.json(r);
    }

    public async findUser(req: Request, res: Response): Promise<Response> {
        try {
            const mail = String(req.query.mail);
            const password = String(req.query.password)
            const user = await AppDataSource.manager.findOne(User, { where: { mail: mail, password: password } });

            if (!user) {
                return res.status(401).json({ message: "Usuário não encontrado!" })
            }

            return res.status(201).json({
                id: user.id,
                mail: user.mail,
                alias: user.alias,
                phone: user.phone
            })


        } catch (error) { return res.status(401).json({ message: "Login incorreto!" }) }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        // o método delete retorna o objeto {"raw": [],"affected": 1}
        // a propriedade affected terá valor 0 se não tiver sido excluído o registro
        const { affected } = await AppDataSource.manager.delete(User, { id });
        return res.json({ affected });
    }

}

export default new UserController();