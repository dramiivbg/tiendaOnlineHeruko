import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/components/auth/auth.service';
import { Product } from '@app/shared/models/product.interface';
import { Vendedor } from '@app/shared/models/vendedor';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
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
  vendedor: Vendedor;

  product$: Product ;
  
  constructor(private productSvc: ProductService,  private authSvc: AuthService,
    private data: DataService,private firestoreSvc: AuthCrudService) {

  
     
     }


   

    
  public newPostForm = new FormGroup({
    ciudad_de_exportacion: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    tipo_producto: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    imagen: new FormControl('', Validators.required),
    valor: new FormControl('',[Validators.required, Validators.pattern('[0-9]*')]),
  

  });
  ngOnInit(): void {


    
     
       

        
  
    
    
  this.product =  this.data.getProduct();


      
     this.productSvc.getOnePost(this.product.id).subscribe(post => {
       
      
      this.product$ = post
    
     
    
     });
    
    }
     
     
       
      
     
       
     
      

     

    
  




  EditPost(data: Product){


    

    





      this.productSvc.preUpdate(data,this.product$.image,this.image);

    



  

  


 
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
  
        
          Swal.fire('Deleted!, Your post has been update.','sucessfull');
          
      }else{
  
          Swal.fire('Error!, There was an error updating this post','error');
        }
    
      }
    )


  

    }


}
