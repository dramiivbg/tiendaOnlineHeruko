import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/components/auth/auth.service';
import { Product } from '@app/shared/models/product.interface';
import { DataService } from '@app/shared/services/data.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  
  private image:any;
  private product: Product;



  uid = '';

 

  producto: Product[];

  product$: Product ;
  
  constructor(private productSvc: ProductService,  private authSvc: AuthService,
    private data: DataService) {

  
     
     }


   

    
  public newPostForm = new FormGroup({
    ciudad_de_exportacion: new FormControl('', Validators.required),
    tipo_producto: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    valor: new FormControl('',Validators.required),
  

  });
  ngOnInit(): void {


    this.authSvc.getCurrentUser().then( res => {



      if(res !== null){
     
        this.uid = res.uid;

        const path = `vendedores/${this.uid}/producto`;
  
    
    
  this.product =  this.data.getProduct();


      
     this.productSvc.getOnePostVendedor(this.uid,this.product).subscribe(post => {
       
      
      this.product$ = post
    
     
    
    
    }
     
     
       );

    

      
     
       
     
      }
      
      })





    
  }




  EditPost(data: Product){


    

    


    this.authSvc.getCurrentUser().then( res => {



      if(res !== null){
     
        this.uid = res.uid;


        console.log('New post',data);

        const path = `vendedores/${this.uid}/producto`;

     
    
      this.productSvc.preUpdate(data,path,this.product.id,this.product$.image,this.image);

         
      
     
       
     
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
