import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {stripeService} from '../../../servicioPago/stripe.service';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { ValorService } from '@app/shared/services/valor.service';

@Component({
  selector: 'app-select-targeta',
  templateUrl: './select-targeta.component.html',
  styleUrls: ['./select-targeta.component.scss']
})
export class SelectTargetaComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  stripeTest: FormGroup;

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
    private stripSvc: stripeService,private cantidaSvc: ValorService) { }


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

       this.stripSvc.charge(valor, result.token.id);
       
        console.log('Token', result.token.id);
        
      } else if (result.error) {
        console.log('error', result.error.message);
    
      }
    });
}

}