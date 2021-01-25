import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Product} from '../../../shared/models/product.interface';
import { ProductService} from '../product.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  private image:any;
  constructor(private productSvc: ProductService){
  }
  
  public newPostForm = new FormGroup({
    cantidad: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    tienda_id: new FormControl('', Validators.required),
    tipo_producto: new FormControl('', Validators.required),
    valor: new FormControl('',Validators.required),
    nombreTienda: new FormControl('',Validators.required),
    direccionTienda: new FormControl('', Validators.required),
    ciudadTienda: new FormControl('',Validators.required),
    barrioTienda: new FormControl('',Validators.required),
    imagenTienda: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }

  addNewPost(data: Product){

   console.log('New post',data);
  console.log(this.productSvc.preAddAndUpdate(data, this.image));
  }

  handleImage(event:any): void{
 
    this.image = event.target.files[0];
    
    
  
  }

  handleImage1(event:any): void{

    this.image = event.target.files[1];
  }

}
