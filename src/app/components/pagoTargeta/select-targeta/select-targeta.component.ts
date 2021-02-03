import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { StripeService } from '@app/servicioPago/stripe.service';



@Component({
  selector: 'app-select-targeta',
  templateUrl: './select-targeta.component.html',
  styleUrls: ['./select-targeta.component.scss']
})
export class SelectTargetaComponent implements AfterViewInit {

@ViewChild('cardInfo') cardInfo: ElementRef;

cardError: string;
card:any;

  constructor(private authSvc: AuthService,
    private ngZone: NgZone, private stripeSvc: StripeService) { }


  ngAfterViewInit(){

    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.onChange.bind(this) );

  }

  onChange({ error }){


    if (error){

      this.ngZone.run(() =>   this.cardError = error.message);


    
      
    }else{

      this.ngZone.run(() =>  this.cardError = null);
     
    }


  }


 async onClick(){
try {
 
  const {token, error} =  await stripe.createToken(this.card);

 if(token){

const response =  await this.stripeSvc.charge(100, token.id);
  
console.log(response);
 }else{

  this.ngZone.run(() =>   this.cardError = error.message);
 }

} catch (error) {
 
  console.log(error);
}
 

  }

  

}
