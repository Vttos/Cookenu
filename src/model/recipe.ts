export type recipe = {
    id: string;
    title: string;
	description: string;
	dataCriacao: string;
    idUser: string 
}

export interface InputRecipeDTO  {
    title: string;
	description: string;
    idUser: string;
    token: string
}  

export interface FindRecipeDTO {
    idUser: string;
    token: string
}