import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {stripeService} from '../../../servicioPago/stripe.service';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { ValorService } from '@app/shared/services/valor.service';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { AuthService } from '@app/components/auth/auth.service';
import { Pago } from '@app/shared/models/pago';
import { CdkNoDataRow } from '@angular/cdk/table';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MessageService } from '@app/shared/services/message.service';
import { ProductoService } from '@app/shared/services/producto.service';
import { User } from '@app/shared/models/user.interface';
import {Pedido} from '../../../shared/models/pedido';
import { ProductService } from '@app/components/posts/product.service';
import { Product } from '@app/shared/models/product.interface';
import { Observable } from 'rxjs';
import { ServiceTService } from '@app/serviceT/service-t.service';
@Component({
  selector: 'app-select-targeta',
  templateUrl: './select-targeta.component.html',
  styleUrls: ['./select-targeta.component.scss']
})
export class SelectTargetaComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
uid = '';
  stripeTest: FormGroup;

  pedidoT: Pedido;

  pago:Pago;

  cliente: User;

  pedido: Pedido;

  products$: Observable<Product[]>;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };
 
  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };
 

 

  constructor(private fb: FormBuilder, private stripeService: StripeService,
    private stripSvc: stripeService,private cantidaSvc: ValorService,
    private authAf: AuthService, private firestore: AuthCrudService,
    private postSvc: ProductService,
    private router: Router,private message: MessageService,private productoSvc: ProductoService,
    private serviceTService: ServiceTService) {

     this.products$ = postSvc.getAllPosts();
     
      this.pedidoT = serviceTService.getPedidoT();

      console.log(this.pedidoT);
            
      
      this.authAf.afAuth.user.subscribe(res => {

        this.uid = res.uid;

      });

      this.initCarrito();
     }


  ngOnInit(): void{

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]

  });

}

createToken(): void {
  const name = this.stripeTest.get('name').value

  if(name == ""){
    Swal.fire("¡por favor! digite su nombre que esta en la targeta de pago");
    return;
  }
  this.stripeService
    .createToken(this.card.element, { name })
    .subscribe((result) => {
      if (result.token) {
       
        const valor = this.cantidaSvc.getValorTotal();

        console.log(valor);

        const path = 'clientes';
        this.firestore.getDoc<User>(path,this.uid).subscribe(res => {

          this.cliente = res;
        });


 


       this.stripSvc.charge(valor, result.token.id).then(() => {


    const pathT = `clientes/${this.uid}/pedidos`;

    this.firestore.create<Pedido>(this.pedidoT,pathT,this.pedidoT.id).then(() => {

     console.log('pedido guardado');
    });
        const path = 'pagos';

        var fecha = new Date()
        const fechaT = (fecha.getMonth()+1) +'/'+ (fecha.getDay()+7)+'/'+fecha.getFullYear();
        

       this.pago = {

        idtokenTargeta: result.token.id,
        cantidad: valor,
        idCliente: this.uid,
        fecha: fechaT

       }
       
          
      this.pedido = this.productoSvc.getProducto();

      this.pedido.CorreoClient = this.cliente.gmail;

  
      
       this.message.sendMessage(this.pedido).subscribe(() => {

        console.log('message enviado correctamente');


       });
       

       
       
        this.firestore.doc<Pago>(this.pago,path).then(res => {

          console.log(res);

          this.router.navigate(['/home']);
        });


        

       });
       

        console.log('Token', result.token.id);

        
      } else if (result.error) {
        Swal.fire(result.error.message);
        
    
      }
    });

}

initCarrito(){

  this.pedido = {
    id: '',
    cliente: null,
    productos:[],
    precioTotal: null,
    estado: 'enviado',
    fecha: new Date(),
    valoracion: null,
}
}

}