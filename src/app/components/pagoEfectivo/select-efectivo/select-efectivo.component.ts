import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/components/auth/auth.service';
import { ProductService } from '@app/components/posts/product.service';
import { Product } from '@app/shared/models/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-efectivo',
  templateUrl: './select-efectivo.component.html',
  styleUrls: ['./select-efectivo.component.scss']
})
export class SelectEfectivoComponent implements OnInit {
  public opened = false;
  public filterProduct = '';
  public  appName = 'ngOnline';
  public products$ : Observable<Product[]>;
  public producto: Product;
  constructor(private authSvc: AuthService,private postSvc: ProductService) {

    this.products$ = this.postSvc.getAllPosts();
   }

  ngOnInit(): void {
  }


  onlogout(): void{

    this.authSvc.logout();





  }

}
