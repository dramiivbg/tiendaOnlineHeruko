import { Vendedor } from "./vendedor";

export interface Product {
     ciudad_de_exportacion: string;
     tipo_producto:string;
     valor:number;
     id?: string;
     image?: any;
     vendedor?: Vendedor;


}