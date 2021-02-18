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

@Component({
  selector: 'app-select-targeta',
  templateUrl: './select-targeta.component.html',
  styleUrls: ['./select-targeta.component.scss']
})
export class SelectTargetaComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
uid = '';
  stripeTest: FormGroup;

  pago:Pago;

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
    private router: Router) {

      this.authAf.afAuth.user.subscribe(res => {

        this.uid = res.uid;

      })
     }


  ngOnInit(): void{

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]

  });

}

createToken(): void {
  const name = this.stripeTest.get('name').value;

  this.stripeService
    .createToken(this.card.element, { name })
    .subscribe((result) => {
      if (result.token) {
       
        const valor = this.cantidaSvc.getValorTotal();

        console.log(valor);

       this.stripSvc.charge(valor, result.token.id).then(() => {

        const path = 'pagos';

       this.pago = {

        idtokenTargeta: result.token.id,
        cantidad: valor,
        idCliente: this.uid

       }

       Swal.fire('transiccion exitosa');
       this.router.navigate(['/envio']);
       
        this.firestore.doc<Pago>(this.pago,path).then(res => {

          console.log(res);
        });


        

       });
       

        console.log('Token', result.token.id);

        
      } else if (result.error) {
        console.log('error', result.error.message);
    
      }
    });
}

}