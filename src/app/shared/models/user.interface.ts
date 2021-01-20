

export type Roles = 'user' | 'vendedor';



export interface User {
   user_id: number;
   username: string;
   password: string;
   gmail: string;
   direccion: string;
   celular: number;
   pais: string;
   role: string;

}

export interface UserResponse {

    message: string;
    token: string;
    userId: number;
    role: Roles;
}