import { type } from "os";

export type Roles = 'user' | 'vendedor';



export interface User {

   username: string;
   password: string;

}

export interface UserResponse {

    message: string;
    token: string;
    userId: number;
    role: Roles;
}