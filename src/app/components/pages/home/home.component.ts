import { Component, OnInit } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import {ProductService} from '../../posts/product.service';
import {AuthCrudService} from '../../../shared/services/authCrud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cantidad = 0;
  public producto: Product;
  public products$ : Observable<Product[]>;
  

  constructor(private postSvc: ProductService, private authCrud: AuthCrudService,
      ) { 
    this.products$ = this.postSvc.getAllPosts()
   
  }

  

  ngOnInit(): void {

   this.postSvc.getAllPosts().subscribe(res => console.log('POSTS',res));
  

   }


  




  }





