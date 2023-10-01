export type user = {
    id: string;
    email: string;
    password: string;
};

export interface UserInputDTO {
    email: string;
    password: string
}

export interface LoginInputDTO {
    email: string;
    password: string;
}

export interface EditUserInputDTO {
    name: string;
    nickname: string;
    id: string;
    token: string
}

export interface FindUser {
    id: string;
    token: string
}