import { Observable } from "rxjs";
import { Product } from "./product.interface";
import { User } from "./user.interface";



export interface Pedido{

    id: string;
    cliente:User
    productos: ProductoPedido[];
    precioTotal: number;
    estado: EstadoPedido;
    fecha: Date;
    valoracion: number;
}


export interface ProductoPedido{

    producto: Product;
    cantidad: number;


}

export type EstadoPedido = 'enviado' | 'visto' | 'camino' | 'entregado';