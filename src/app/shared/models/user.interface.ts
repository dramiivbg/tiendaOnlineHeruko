import { Encuesta } from "./encuesta";


export interface User {
   name: string;
   apellido: string;
   cedula: number;
   gmail: string;
   direccion: string;
   pais: string;
   role: string;
   telefono: number;
   id?: string;
   active?: boolean;
   encuesta?: Encuesta;

}



