import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../providers/login.service';
import { KeysPipe } from '../../pipes/keys.pipe';
import { Usuario } from '../../interfaces/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import 'hammerjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  show: boolean = false;
  usuariosList: Usuario[] = [];
  datos: string;
  listaKey: Usuario[] = [];
  usuario = {
    email: "",
    password: "",
    role: ""
  }

  constructor(
                private _ls: LoginService,
                private pipe: KeysPipe,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private toastr: ToastrService
              ){
                this._ls.getUsuarios().subscribe( data => {
                  console.log(data);
                  this.usuariosList = data

                 this.datos = JSON.stringify(pipe.transform(data));

                 localStorage.setItem('usuarios', this.datos );
               });
              }

  ngOnInit() {
  }

  login(){
    console.log(this.usuario);
    let existeUsuario: string = '';

    this.listaKey = JSON.parse(localStorage.getItem('usuarios'));
    console.log(this.listaKey)

    for (let i = 0; i < this.listaKey.length; i++) {
        let key:any = this.listaKey[i]
        console.log(key)
        this._ls.getUsuario(key).subscribe( data => {
            let usuario:Usuario = data
            console.log(usuario);
            console.log(this.usuario);

            if ( this.usuario.email === usuario.email ) {
              console.log("llego primer if");
              if ( this.usuario.password === usuario.password ) {
                console.log("llego segundo if");
                this.usuario = usuario;
                existeUsuario = 'si';

                localStorage.setItem('usuario', JSON.stringify(this.usuario));
                localStorage.setItem('role', JSON.stringify(this.usuario.role));

                this.router.navigate(['/home'])

                return;

              } else {
                existeUsuario = 'Contraseña Mala'
                this.toastr.error('Error al Iniciar Sesion', 'Contraseña o Correo Electrónico Incorrectos',{
                  timeOut: 2000,
                  positionClass: 'toast-top-right',
                });
              }
            } else {
              if ( i + 1 == this.listaKey.length && existeUsuario == '' ) {
                this.toastr.error('El correo y contraseña no existe', 'Por favor Registrese',{
                  timeOut: 2000,
                  positionClass: 'toast-top-right',
                });
              }
            }

        })
    }

  }

}
