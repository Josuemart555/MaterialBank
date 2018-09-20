import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Cliente } from '../interfaces/cliente';
import "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class ClientesService {

  clienteUrl:string = "https://banco-proyect-josue.firebaseio.com/clientes.json"
  clientUrl:string = "https://banco-proyect-josue.firebaseio.com/clientes/"

  constructor( private http: Http ) { }

  nuevoCliente( cliente: Cliente ){

    let body = JSON.stringify( cliente );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.clienteUrl, body, { headers } )
                    .map( res =>{
                      return res.json();
                    })

  }

  actualizarCliente( cliente: Cliente, key$:string ){

    let body = JSON.stringify( cliente );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.clientUrl }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
                    .map( res =>{
                      return res.json();
                    })

  }

  getCliente( key$: string ){

    let url = `${ this.clientUrl }/${ key$ }.json`;
    return this.http.get( url )
                    .map( res => res.json());

  }

  getClientes(){

    return this.http.get( this.clienteUrl )
                    .map( res => res.json())

  }

  borrarCliente( key$:string ){

    let url = `${ this.clientUrl }/${ key$ }.json`;
    return this.http.delete( url )
                    .map( res => res.json());

  }

}
