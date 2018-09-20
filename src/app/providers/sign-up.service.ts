import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../interfaces/usuario';
import "rxjs/Rx";

@Injectable()
export class SignUpService {

  usuarioUrl = "https://banco-proyect-josue.firebaseio.com/usuarios.json";

  constructor(   private http: Http ) { }

  nuevoUsuario( usuario: Usuario ){

      let body = JSON.stringify( usuario );
      let headers = new Headers({
          'Content-Type':'application/json'
      });

      return this.http.post( this.usuarioUrl, body, { headers } )
                      .map( res =>{
                          return res.json();
                      })

  }

}
