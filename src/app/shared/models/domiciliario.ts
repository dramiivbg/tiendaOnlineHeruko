import { Pedido } from "./pedido";

export interface Domiciliario {

    correo: string;
    nombre: string;
    apellido: string;
    telefono: number;
    id?: string;
    password?: string;
    pedidos?: Pedido[];

}