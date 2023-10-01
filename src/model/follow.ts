export type follow = {
    id: string;
    idUser: string;
    idSeguido: string
}

export interface inputFollowDTO {
    idUser: string;
    idSeguido: string;
    token: string
}

export interface FindFollowDTO {
    id: string;
    token: string
}