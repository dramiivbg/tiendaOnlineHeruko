import { User } from "./user.interface";

export interface Chat{

    cliente: User;
    message: string;
    fecha: Date;
    
}