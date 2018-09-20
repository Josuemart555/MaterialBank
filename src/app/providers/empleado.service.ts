import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Empleado } from '../interfaces/empleado';
import "rxjs/Rx";
import { CargosService } from './cargos.service';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpleadoService {

  empleadoUrl:string = "https://banco-proyect-josue.firebaseio.com/empleados.json"
  empleadUrl:string = "https://banco-proyect-josue.firebaseio.com/empleados/"

  constructor( private http: Http,
               private _cs: CargosService
             ) {}

  nuevoEmpleado( empleado: Empleado ){

    let body = JSON.stringify( empleado );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.empleadoUrl, body, { headers } )
                    .map( res =>{
                      return res.json();
                    })

  }

  actualizarEmpleado( empleado: Empleado, key$:string ){

    let body = JSON.stringify( empleado );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let  url = `${ this.empleadUrl }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
                    .map( res =>{
                      return res.json();

                    })

  }

  getEmpleado( key$ ){

    let url = `${ this.empleadUrl }/${ key$ }`;
    return this.http.get( url )
                    .map( res => res.json())

  }

  getEmpleados(){

    return this.http.get( this.empleadoUrl )
                    .map( res => res.json())

  }

  borrarEmpleado( key$:string ){

    let  url = `${ this.empleadUrl }/${ key$ }.json`;
    return this.http.delete( url )
                    .map( res => res.json());

  }

}
