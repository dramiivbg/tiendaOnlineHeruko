import { DatepickerDropdownPositionX } from "@angular/material/datepicker";
import { User } from "./user.interface";

export interface Tarea {


    cedula_cliente: number;

    tipo_tarea: string;
    tarea: string;

    fecha: string;
    id?: string;

}