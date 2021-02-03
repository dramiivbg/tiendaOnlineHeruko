

export type Roles = 'user' | 'vendedor';



export interface User {
   cedula: number;
   gmail: string;
   direccion: string;
   pais: string;
   role: string;

}

export interface UserResponse {

    message: string;
    token: string;
    cedula: number;
    role: Roles;
}