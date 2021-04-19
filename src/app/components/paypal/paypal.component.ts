import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pago } from '@app/shared/models/pago';
import { Pedido } from '@app/shared/models/pedido';
import { PaypalService } from '@app/shared/paypal.service';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { MessageService } from '@app/shared/services/message.service';
import { ProductoService } from '@app/shared/services/producto.service';
import { ValorService } from '@app/shared/services/valor.service';
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

  pago:Pago;

  constructor(private paypalSvc: PaypalService,    private authAf: AuthService,
     private firestore: AuthCrudService,private router: Router,
     private message: MessageService,
     private cantidaSvc: ValorService) {

    this.pedido = paypalSvc.getPedidoPaypal();

   paypalSvc.setPedidoPaypal(this.pedido);

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

          const valor = this.cantidaSvc.getValorTotal();

          const pedido = this.paypalSvc.getPedidoPaypal();

          console.log('pedido->', pedido);
          const pathT = `clientes/${this.uid}/pedidos`;
  
          this.firestore.create<Pedido>(pedido,pathT,this.pedido.id);
            
           this.message.sendMessage(pedido).subscribe();

           console.log('sendPedido->', pedido);
           console.log('pedido guardado');
           
           const path = 'pagos';

        var fecha = new Date()
        const fechaT = ((fecha.getDate())+'/'+(1+fecha.getMonth())) +'/'+fecha.getFullYear();
        

       this.pago = {

        idtokenTargeta: order.id,
        cantidad: valor,
        idCliente: this.uid,
        fecha: fechaT

       }
       this.firestore.doc<Pago>(this.pago,path).then(res => {

        console.log(res);

        Swal.fire('transaccion exitosa').then(() => {

          this.router.navigate(['/home']);
         })

      }).catch(() => {


        Swal.fire('¡transaccion fallida! porfavor intente de nuevo').then(() => {

          this.router.navigate(['/home'])
        });
      });
          
          
        }
      },
      onError: err =>  {

        Swal.fire('¡transaccion fallida! por favor comenzar de nuevo').then(() => {

          this.router.navigate(['/home']);

        });
      }
    })
    .render( this.paypalElement.nativeElement);
}

}


