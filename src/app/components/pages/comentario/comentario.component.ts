import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '@app/components/auth/auth.service';
import { Chat } from '@app/shared/models/chat';
import { Product } from '@app/shared/models/product.interface';
import { User } from '@app/shared/models/user.interface';
import { AuthCrudService } from '@app/shared/services/authCrud.service';
import { ComentProductService } from '@app/shared/services/coment-product.service';
import { Observable } from 'rxjs';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @ViewChild('chatcontent') chatcontent: ElementRef;
  scrolltop: number = null;
  chatForm: FormGroup;
  
  message = '';
  users = [];
  chats: Observable<Chat[]>;

 

  matcher = new MyErrorStateMatcher();

  producto: Product;
  cliente: User;

  chat: Chat;

  
  constructor(  private formBuilder: FormBuilder, private productSvc: ComentProductService,
    private firestoreSvc: AuthCrudService,private authSvc: AuthService) {

    this.initProducto();
    this.initChat();

    setTimeout(() => this.scrolltop = this.chatcontent.nativeElement.scrollHeight, 500);

         authSvc.afAuth.user.subscribe(res => {

          const path = 'clientes'
    this.firestoreSvc.getDoc<User>(path,res.uid).subscribe(cliente => {

      this.cliente = cliente;

    });

         })
     }

  ngOnInit(): void {



    this.chatForm = this.formBuilder.group({
      'message' : [null, Validators.required]
    });

    this.producto =   this.productSvc.getProduct();

    const path1 = `productos/${this.producto.id}/comentarios`;
    
    this.chats = this.firestoreSvc.getChats(path1);
  }

  onFormSubmit(form: any) {

  const date = new Date;

  this.chat.fecha = date;

  this.chat.cliente = this.cliente;

  this.chat.message = form.message;

    const path = `productos/${this.producto.id}/comentarios`;

    this.firestoreSvc.doc<Chat>(this.chat,path).then( () => {

      console.log('añadido con exito');
    })
    
  

    
  }

  initProducto(){

    this.producto = {

      ciudad_de_exportacion: null,
      tipo_producto: null,
      valor: null,
      id: null,
      image: null,
      vendedor: null
    }

  }

  initChat(){

    this.chat = {
      cliente: null,
      fecha: null,
      message: null
    }
  }
}
