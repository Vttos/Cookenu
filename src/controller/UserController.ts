import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO, FindUser } from "../model/user";


const userBusiness = new UserBusiness()

export class UserController{

    public signup = async (req: Request, res: Response) => {
        try {
            const input: UserInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!", token });
        } catch (error : any) {
            res.status(400).send(error.message);
        }
    }

    public login = async (req: Request, res: Response) => {
        try{
            const input: LoginInputDTO ={
                email: req.body.email,
                password: req.body.password
            }

            const dados_user = await userBusiness.login(input)

            res.status(200).send({ message:"Usuário logado.", dados_user})
        } catch (error: any){
            res.status(400).send(error.message)
        }
    }

    public getUser = async (req: Request, res: Response) => {
        try{
            const input: FindUser = {
                id: req.params.id,
                token: req.headers.authorization!
            } 

            const user = await userBusiness.getUser(input)
  
            res.status(200).send({user})
        } catch (error: any){
            res.status(400).send(error.message)
        }
    }

}