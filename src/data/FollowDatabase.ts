import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError";
import { follow } from "../model/follow";


export class FollowDatabase extends BaseDatabase {
    private TABLE_FOLLOWING = "cookenu_following"

    public insertFollow = async (follow: follow) => {
        try{ 
            await FollowDatabase.connection()
                .insert({
                    id: follow.id,
                    id_user: follow.idUser,
                    id_seguido: follow.idSeguido
                })
                .into(this.TABLE_FOLLOWING)

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public getFollow = async (id: string) => {
        try{ 
            const follow: any = await FollowDatabase.connection(this.TABLE_FOLLOWING)
            .select()
            .where({id_user: id})

            return  follow
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}