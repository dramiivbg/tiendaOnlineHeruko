import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Product} from '../../../shared/models/product.interface';
import { ProductService} from '../product.service';
import Swal from 'sweetalert2';
import { AuthService } from '@app/components/auth/auth.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  private image:any;
  private product:any;

  uid = '';

  producto: Product;

  constructor(private productSvc: ProductService,  private authSvc: AuthService){

  }
  
  public newPostForm = new FormGroup({
    ciudad_de_exportacion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    tipo_producto: new FormControl('', Validators.required),
    valor: new FormControl('',Validators.required),
  

  });

  ngOnInit(): void {
  }

  addNewPost(data: Product){


    this.authSvc.getCurrentUser().then( res => {



      if(res !== null){
     
        this.uid = res.uid;


        console.log('New post',data);
        const path =  `vendedores/${this.uid}/producto`;
         this.product =  console.log(this.productSvc.preAddAndUpdate(data, this.image,path));
      
     
       
     
      }
      
      })



  

  


 
  }

  handleImage(event:any): void{
 
    this.image = event.target.files[0];
    
    
  
  }


  create(){

    Swal.fire({

      title:'Are you sure',
      text:`You won't be able to revert this!`,
      icon:'warning',
      
    }).then(result => {
  
      if(result.value){
  
        
          Swal.fire('Deleted!, Your post has been deleted.','sucessfull');
          
      }else{
  
          Swal.fire('Error!, There was an error deleting this post','error');
        }
    
      }
    )


  

    }

}
