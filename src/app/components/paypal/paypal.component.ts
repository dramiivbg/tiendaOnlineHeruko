import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '@app/shared/models/pedido';
import { PaypalService } from '@app/shared/paypal.service';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ProductoService } from '@app/shared/services/producto.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';

declare var paypal;


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement : ElementRef;
  
  pedido: Pedido = {

    cliente: null,
    estado: null,
    fecha: null,
    id: null,
    precioTotal: null,
    productos: null,
    valoracion: null,
    CorreoClient: null
   
  }
  uid = '';
  


  constructor(private paypalSvc: PaypalService,    private authAf: AuthService,
     private firestore: AuthCrudService,private router: Router) {

    this.pedido = paypalSvc.getPedidoPaypal();

    this.authAf.afAuth.user.subscribe(res => {

      this.uid = res.uid;

    });

   }

  ngOnInit(){

    paypal.
    Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({

         
          purchase_units: [{

          
            description: this.pedido.fecha,
            amount: {

              currency_code: "USD",
              value: this.pedido.precioTotal


            }

          }]
        })
      },
      onApprove : async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);

        if(order){

          const pathT = `clientes/${this.uid}/pedidos`;

          this.firestore.create<Pedido>(this.pedido,pathT,this.pedido.id).then(() => {
      
           console.log('pedido guardado');
           this.router.navigate(['/home']);
          });
        }
      },
      onError: err =>  {

        Swal.fire('transaccion fallida').then(() => {

          this.router.navigate(['/home']);

        });
      }
    })
    .render( this.paypalElement.nativeElement);
  }

}


