import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Empleado } from '../../../interfaces/empleado';
import { Cargo } from '../../../interfaces/cargo';
import { EmpleadoService } from '../../../providers/empleado.service';
import { CargosService } from '../../../providers/cargos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styles: []
})
export class EmpleadoComponent implements OnInit {

  empleado: Empleado = {
    codigo: 0,
  	nombre: "",
  	edad: 0,
  	cui: 0,
  	fechaContrato: '',
  	cargo:{
      codigo:"",
      tipoCargo:"",
      sueldo: 0
    }
  }

  cargos: Cargo[] = [];
  id:string;

  constructor(
                private _es: EmpleadoService,
                private _cs: CargosService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private toastr: ToastrService
             ) {

               this._cs.getCargos()
                       .subscribe( data =>{
                         this.cargos = data;
                       })

                this.activatedRoute.params.subscribe( parametros =>{
                  this.id = parametros['id']
                  if ( this.id !== "nuevo" ) {

                    this._es.getEmpleado( this.id )
                            .subscribe( empleado => this.empleado = empleado );

                  }
                })

             }

  ngOnInit() {
  }

  guardar(){

    this._es.nuevoEmpleado( this.empleado )
            .subscribe( data =>{
              this.router.navigate( ['/empleados'] )
            },
            error => console.error(error));

    console.log(this.empleado);

  }

}
