import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { SignUpService } from '../../providers/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  usuario = {
    email: "",
    password: "",
    role: "ROLE_USER"
  }

  constructor( private _supS: SignUpService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private toastr: ToastrService ) {}

  ngOnInit() {
  }

  guardarUsurio(){

    console.log("Usuario save: "+this.usuario)
    this._supS.nuevoUsuario( this.usuario )
              .subscribe( data =>{
                this.router.navigate( ['/login'] )
                this.toastr.success('Usuario Agregado', 'Operación Realizada Correctamente', {
                  timeOut: 4000,
                  positionClass: 'toast-top-right',
                });
              }),
              error => console.error( error );

  }

}
