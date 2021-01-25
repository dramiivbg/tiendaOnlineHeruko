import { Component, OnInit } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import {ProductService} from '../../posts/product.service';
import {AuthCrudService} from '../../../shared/services/authCrud.service';
import {CantidadTotalService} from '../../../shared/services/cantidad-total.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cantidad = 0;
  public producto: Product;
  public products$ : Observable<Product[]>;
  filterProduct = '';

  constructor(private postSvc: ProductService, private authCrud: AuthCrudService,
      private cantidadSvc:CantidadTotalService  ) { 
    this.products$ = this.postSvc.getAllPosts()
   
  }

  

  ngOnInit(): void {

   this.postSvc.getAllPosts().subscribe(res => console.log('POSTS',res));
  

   }


   addCantidad(){



   // this.cantidadSvc.addCantidad(this.cantidad);

    console.log(this.cantidad);


   }





  }





