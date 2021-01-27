import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/components/auth/auth.service';
import { ProductService } from '@app/components/posts/product.service';
import { Product } from '@app/shared/models/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comprar-efecty',
  templateUrl: './comprar-efecty.component.html',
  styleUrls: ['./comprar-efecty.component.scss']
})
export class ComprarEfectyComponent implements OnInit {

  public product$: Observable<Product>;
  public opened = false;
  public filterProduct = '';
  public  appName = 'ngOnline';
  public products$ : Observable<Product[]>;
  public producto: Product;
  constructor(public productSvc: ProductService,private route: ActivatedRoute,private authSvc: AuthService,private postSvc: ProductService) { }

  ngOnInit(): void {


    this.products$ = this.postSvc.getAllPosts();

    const idPost  = this.route.snapshot.params.id;

    this.product$ = this.productSvc.getOnePost(idPost);

  
  }

  onlogout(): void{

    this.authSvc.logout();





  }

}
