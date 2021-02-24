import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pedido } from '@app/shared/models/pedido';
import { ProductoService } from '@app/shared/services/producto.service';

declare var paypal;


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement : ElementRef;
  
  // pedido: Pedido = {

  //   cliente: null,
  //   estado: null,
  //   fecha: null,
  //   id: null,
  //   precioTotal: null,
  //   productos: null,
  //   valoracion: null,
  //   CorreoClient: null
   
  // }
  

  producto = {
    description : 'producto en venta',
    precio      : 599.99,
    img         : 'imagen'
  }

  constructor(private productoSvc: ProductoService) {

   // this.pedido = productoSvc.getProducto();

   }

  ngOnInit(){

    paypal.
    Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({

          purchase_units: [{

            description: this.producto.description,
            amount: {

              currency_code: 'MXN',
              value: this.producto.precio


            }

          }]
        })
      },
      onApprove : async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: err =>  {

        console.log(err);
      }
    })
    .render( this.paypalElement.nativeElement);
  }

}
