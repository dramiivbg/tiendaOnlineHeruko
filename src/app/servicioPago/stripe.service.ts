import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class stripeService {

  constructor(private http: HttpClient) { }

charge(cantidad, tokenId, ){

  const api = "http://localhost:3000/stripe_checkout";
  return this.http.post(api, {

    stripeToken: tokenId,
    cantidad: cantidad,
    

  }).toPromise();

}

}


