import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../providers/empleado.service';
import { Cargo } from '../../interfaces/cargo';
import { CargosService } from '../../providers/cargos.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent implements OnInit {

  empleados: any[] = [];
  cargos: Cargo[] = [];

  constructor(
                private _es: EmpleadoService,
                private _cs: CargosService,
                private toastr: ToastrService
              ) {

    this._es.getEmpleados()
            .subscribe( data =>{
              console.log(data);
              this.empleados = data;
            })

      this._cs.getCargos().subscribe(data =>{
          console.log(data)
          this.cargos = data
      });

  }

  ngOnInit() {
  }

  eliminarEmpleado( key$:string ){

    this._es.borrarEmpleado( key$ )
            .subscribe( respuesta =>{
              if (respuesta) {
                console.error(respuesta);
                this.toastr.error('Error al Eliminar', 'La operación no se Realizo Correctamente', {
                  timeOut: 4000,
                  positionClass: 'toast-top-center',
                });
              } else {
                delete this.empleados[key$]
                this.toastr.error('Cargo Eliminado', 'Operación Realizada Correctamente', {
                  timeOut: 4000,
                  positionClass: 'toast-top-center',
                });
              }
            })

  }

}
