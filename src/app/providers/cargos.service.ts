import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Cargo } from '../interfaces/cargo';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class CargosService {

  cargoUrl:string = "https://banco-proyect-josue.firebaseio.com/cargos.json";
  carUrl:string = "https://banco-proyect-josue.firebaseio.com/cargos/";

  public cargosList: Cargo[] = [];
  cargo: any;

  constructor( private http: Http ) {

    this.getCargos()
            .subscribe( data =>{
              this.cargosList = data;
            })
  }

  nuevoCargo( cargo: Cargo ){

    let body = JSON.stringify( cargo );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.cargoUrl, body, { headers } )
                    .map( res =>{
                      return res.json();
                    })

  }

  actualizarCargo( cargo: Cargo, key$:string ){

    let body = JSON.stringify( cargo );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.carUrl }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
                    .map( res =>{
                      return res.json();
                    })

  }

  getCargo( key$:string ){

    let url = `${ this.carUrl }/${ key$ }.json`;
    return this.http.get( url )
                    .map( res => res.json());

  }

  getCargos(){

    return this.http.get( this.cargoUrl )
                    .map( res => res.json());

  }

  borrarCargo( key$:string ){

      let url = `${ this.carUrl }/${ key$ }.json`;
      return this.http.delete( url )
                      .map( res => res.json());

  }

}
