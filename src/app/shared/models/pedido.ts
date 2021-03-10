import { Observable } from "rxjs";
import { Product } from "./product.interface";
import { User } from "./user.interface";
import { Vehiculo } from "./vehiculo";



export interface Pedido{

    id: string;
    cliente:User
    productos: ProductoPedido[];
    precioTotal: number;
    estado: string;
    fecha: any;
    valoracion: number;
    CorreoClient?:string;
    vehiculo?: Vehiculo;
   
}


export interface ProductoPedido{

    producto: Product;
    cantidad: number;
   
  

  


}

