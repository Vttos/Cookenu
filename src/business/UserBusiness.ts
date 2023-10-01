import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/authenticator";
import {
    UserInputDTO,
    user,
    EditUserInputDTO,
    FindUser,
    LoginInputDTO,
} from "../model/user";
import {
    CustomError,
    InvalidEmail,
    InvalidPassword,
    UnauthorizedUser,
  } from "../error/customError";
import { HashedPassword } from "../services/hashManager";
import { generateId } from "../services/idGenerator";


const hashedPassword = new HashedPassword()
const authenticator = new Authenticator()
const userDatabase = new UserDatabase()

export class UserBusiness {
    public createUser = async (input: UserInputDTO) => {
        try {
            let { email, password } = input

            if(!email || !password) {
                throw new CustomError(400, "Preencha corretamente os campos");
            }

            if(!email.includes("@")){
                throw new InvalidEmail();
            }

            const id = generateId()
            const hashPassword = await hashedPassword.generateHash(password)

            const user:user = {
                id,
                email,
                password: hashPassword
            }

            await userDatabase.insertUser(user)
            const token = authenticator.generateToken(id)

            return token
        } catch (error : any){
            throw new CustomError(400, error.message);
        }
    }

    public login = async (input: LoginInputDTO): Promise<string> => {
        try {
            let{ email, password } = input

            if(!email || !password) {
                throw new CustomError(400, "Preencha corretamente os")
            }

            const user = await userDatabase.findUserEmail(email)

            const hashedComparison = await hashedPassword.compareHash(password, user.password)

            if(!hashedComparison){
                throw new InvalidPassword()
            }

            const token = authenticator.generateToken(user.id)

            const dados_user: any ={
                id: user.id,
                token: token
            }

            return dados_user
        } catch (error: any){
            throw new CustomError(400, error.message)
        }
    }

    public getUser = async (input: FindUser): Promise<any> => {
        try{
            let{ id, token } = input

            if( !id || !token){
                throw new CustomError(400, "O id não esta sendo passado.")
            }

            const compareToken = authenticator.getToken(token)

            const result = await userDatabase.findUser(id)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
 
}