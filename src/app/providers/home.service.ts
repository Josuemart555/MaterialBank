import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class HomeService {

  usuariosUrl = "https://banco-proyect-josue.firebaseio.com/usuarios.json";

  constructor(
                private http: Http
              )
              {

              }

  getUsuarios(){

    return this.http.get( this.usuariosUrl )
                    .map( res => res.json());

  }

}
