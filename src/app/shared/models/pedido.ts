import { Observable } from "rxjs";
import { Product } from "./product.interface";
import { User } from "./user.interface";



export interface Pedido{

    id: string;
    cliente:User
    productos: ProductoPedido[];
    precioTotal: number;
    estado: string;
    fecha: any;
    valoracion: number;
    CorreoClient?:string;
   
}


export interface ProductoPedido{

    producto: Product;
    cantidad: number;
   
  

  


}

