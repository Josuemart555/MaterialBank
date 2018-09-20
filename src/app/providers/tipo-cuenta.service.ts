import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TipoCuenta } from '../interfaces/tipo-cuenta';
import "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class TipoCuentaService {

  tipoCuentaUrl:string = "https://banco-proyect-josue.firebaseio.com/tipoCuenta.json"
  tcUrl:string = "https://banco-proyect-josue.firebaseio.com/tipoCuenta/"

  constructor( private http: Http ) { }

  nuevoTipoCuenta( tipoCuenta: TipoCuenta ){

    let body = JSON.stringify( tipoCuenta );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.tipoCuentaUrl, body, { headers } )
                    .map( res =>{
                      return res.json();
                    })

  }

  getTipoCuenta( key$:string ){

    let url = `${ this.tcUrl }/${ key$ }.json`;
    return this.http.get( url )
                    .map( res => res.json());

  }

  getTiposCuentas(){

    return this.http.get( this.tipoCuentaUrl )
                    .map( res => res.json())

  }

  actualizarTipoCuenta( tipoCuenta: TipoCuenta, key$:string ){

    let body = JSON.stringify( tipoCuenta );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.tcUrl }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
                    .map( res =>{
                      return res.json();
                    })

  }

  borrarTipoCuenta( key$:string ){

    let url = `${ this.tcUrl }/${ key$ }.json`;
    return this.http.delete( url )
                    .map( res => res.json());

  }

}
