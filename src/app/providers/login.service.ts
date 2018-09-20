import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../interfaces/usuario';
import "rxjs/Rx";

@Injectable()
export class LoginService {

  usuarioUrl = "https://banco-proyect-josue.firebaseio.com/usuarios.json";
  userUrl = "https://banco-proyect-josue.firebaseio.com/usuarios/";
  private usuarioList: Usuario[] = [];

  constructor(
                private http: Http
              ) { }

    getUsuario( key$:string ){

      let url = `${ this.userUrl }/${ key$ }.json`;
      return this.http.get( url )
                      .map( res => res.json());

    }

    getUsuarios(){

      return this.http.get( this.usuarioUrl )
                      .map( res => res.json());

    }

}
