import * as jwt from "jsonwebtoken"

export class Authenticator {
    public generateToken = (id: string) => {
        const token = jwt.sign({ id },  process.env.JWT_KEY as string, {expiresIn:"30m"});

        return token
    }

    public getToken = (token: string) => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string)
        return payload
    }

}



