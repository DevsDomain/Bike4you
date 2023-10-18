import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { User } from '../entities/User';

class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const { userName, mail, password, phone } = req.body;
            const user = await AppDataSource.manager.save(User, { userName, mail, password, phone }).catch(e => {
                if (/(userName)[\s\S]+(already exists)/.test(e.detail)) {
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
                    userName: user.userName
                })
            }

        } catch (error) {
            res.status(401).json("Erro ao cadastrar!")
        }

    }



    public async update(req: Request, res: Response): Promise<Response> {
        const { id, userName, mail, password, phone } = req.body;
        //obtém o usuário na tabela users
        const user = await AppDataSource.manager.findOneBy(User, { id });
        if (!user) { //verifica se o usuário existe
            return res.json({ error: "Usuário inexistente", props: "user" });
        }
        user.userName = userName;
        user.mail = mail;
        user.phone = phone;
        const r = await AppDataSource.manager.save(User, user).catch(e => {
            // testa se o userName é repetido
            if (/(userName)[\s\S]+(already exists)/.test(e.detail)) {
                return { error: 'Codinome já existe', props: "userName" };
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
            let id = Number(req.query.id);

            const user = await AppDataSource.manager.findOne(User, { where: { id } });

            if (!user) {
                return res.status(401).json({ message: "Usuário não encontrado!" })
            }

            return res.status(201).json({
                id: user.id,
                mail: user.mail,
                userName: user.userName,
                phone: user.phone
            })


        } catch (error) { return res.status(401).json({ message: "Login incorreto!" }) }
    }


    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const { mail, password } = req.body
            const user = await AppDataSource.manager.findOne(User, { where: { mail: mail, password: password } });

            if (!user) {
                return res.status(401).json({ message: "Usuário não encontrado!" })
            }

            return res.status(201).json({
                id: user.id,
                mail: user.mail,
                userName: user.userName,
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