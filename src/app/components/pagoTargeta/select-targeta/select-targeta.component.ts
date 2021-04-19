
import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { ProductService } from '@app/components/posts/product.service';
import { Product } from '@app/shared/models/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-targeta',
  templateUrl: './select-targeta.component.html',
  styleUrls: ['./select-targeta.component.scss']
})
export class SelectTargetaComponent implements OnInit {
  products$: Observable<Product[]>;

  
  constructor(private postSvc: ProductService) {

     this.products$ = postSvc.getAllPosts();
     
     }


  ngOnInit(): void{

  
}

}