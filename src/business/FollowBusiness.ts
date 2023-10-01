import { inputFollowDTO, follow, FindFollowDTO } from "../model/follow"
import { FollowDatabase } from "../data/FollowDatabase"
import { Authenticator } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { CustomError } from "../error/customError"

const followDatabase = new FollowDatabase()
const authenticator = new Authenticator()

export class FollowBusiness {

    public following = async (input: inputFollowDTO) => {
        try {
            let{
                idUser,
                idSeguido,
                token
            } = input

            if(!idUser || !idSeguido) {
                throw new CustomError(400, "O id não esta sendo enviado!")
            }

            const id = generateId()
            const compareToken = authenticator.getToken(token)
        
            const follow: follow = {
                id,
                idUser,
                idSeguido
            }

            await followDatabase.insertFollow(follow)

        } catch (error: any) {
            throw new CustomError(400, error.message) 
        }
    }

    public getFollow = async (input: FindFollowDTO): Promise<any> => {
        try{
            let{ id, token } = input

            if( !id || !token){
                throw new CustomError(400, "O id não esta sendo passado.")
            }

            const compareToken = authenticator.getToken(token)

            const result = await followDatabase.getFollow(id)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}
